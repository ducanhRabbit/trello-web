import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder}  from '~/util/formatter'
import { DndContext, PointerSensor, useSensor, useSensors ,DragOverlay, defaultDropAnimationSideEffects} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

function BoardContent({board}) {

  const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
  }

  const pointer = useSensor(PointerSensor,{
    activationConstraint: {
      distance: 10,
    },
  })
  const sensor = useSensors(pointer)
  const [oderedColumnsState,setOderedColumnsState] = useState([])
  const [activeDragItemId,setActiveDragItemId] = useState(null)
  const [activeDragItemType,setActiveDragItemType] = useState(null)
  const [activeDragItemData,setActiveDragItemData] = useState(null)
  const [oldColumnState,setOldColumnState] = useState(null)

  useEffect(()=>{
    const oderedColumns = mapOrder(board?.columns,board?.columnOrderIds,'_id')
    setOderedColumnsState(oderedColumns)
  },[board])

  const handleDragStart = (e)=>{
    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    if(e?.active?.data?.current?.columnId){
      setOldColumnState(findColumnByCardId(e?.active?.id))
    }
    setActiveDragItemData(e?.active?.data?.current)
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  const findColumnByCardId =(cardId)=>{
    oderedColumnsState.find(col => col?.cards.map(card => card._id).includes(cardId))
  } 

  const handleDragOver = (e)=>{
    const {active, over} = e

    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    const {id: activeDraggingCardId, data:{current: activeDraggingCardData}} = active
    const {id: overCardId} = over

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if(activeColumn._id !== overColumn._id){
      setOderedColumnsState((prev)=>{
        const overCardIndex = overColumn?.cards?.findIndex((card)=> card._id === overCardId) 
        let newCardIndex

        const isBelowOverItem =
                over &&
                active.rect.current.translated &&
                active.rect.current.translated.top >
                  over.rect.top + over.rect.height;

              const modifier = isBelowOverItem ? 1 : 0;

              newCardIndex =
                overIndex >= 0 ? overIndex + modifier : overItems.length + 1;

                const nextColumn = cloneDeep(prev)
                const nextActiveColumn = nextColumn.find((column)=> column._id === activeColumn._id)
                const nextOverColumn = nextColumn.find((column)=> column._id === overColumn._id)

                if(nextActiveColumn){
                  nextActiveColumn.cards = nextActiveColumn.cards.filter((card)=> card._id !== activeDraggingCardId)
                  nextActiveColumn.cardOderIds = nextActiveColumn.cards.map((card)=> card._id)
                }

                if(nextOverColumn){
                  nextOverColumn.cards = nextOverColumn.cards.filter((card)=> card._id !== activeDragItemId)

                  nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex,0,activeDragItemData)

                  nextOverColumn.cardOderIds = nextOverColumn.cards.map((card)=> card._id)
                }
        return nextColumn
      })
    }

  }

  const handleDragEnd = (e)=>{
    const {active,over} = e
    if(!over || !active) return

    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD){
      const {id: activeDraggingCardId, data:{current: activeDraggingCardData}} = active
      const {id: overCardId} = over

      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if(oldColumnState._id !== overColumn._id){

      }else{
        const oldCardIndex = oldColumnState?.cards.findIndex((c)=> c._id === activeDragItemId)
        const newCardIndex = oldColumnState?.cards.findIndex((c)=> c._id === overCardId)

        const dndOderedCards = arrayMove(oldColumnState?.cards,oldCardIndex,newCardIndex)

        setOderedColumnsState(prev =>{
          const nextColumn = cloneDeep(prev)

          const targetColumn = nextColumn.find((col)=> col._id ===overColumn._id)
          targetColumn.cards = dndOderedCards
          targetColumn.cardOrderIds = targetColumn.cards.map((card)=> card._id)

          return nextColumn
        })
      }
    }

    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN){
      if(active.id!= over.id){
        const oldColumnIndex = oderedColumnsState.findIndex((c)=> c._id === active.id)
        const newColumnIndex = oderedColumnsState.findIndex((c)=> c._id === over.id)
  
        const dndOderedColumns = arrayMove(oderedColumnsState,oldColumnIndex,newColumnIndex)
        setOderedColumnsState(dndOderedColumns)
      }
    }

    setActiveDragItemData(null)
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setOldColumnState(null)
  }
  return (
    <DndContext  onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensor}>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        height: (theme) => theme.trello.boardContentHeight,
        width:'100%',
        display:'flex',
        p:'10px 0'
      }}>
        <ListColumns columns={oderedColumnsState}/>
        <DragOverlay dropAnimation={dropAnimation}>
          {activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && <Column column={activeDragItemData}></Column>}
          {activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemData}></Card>}
        </DragOverlay>
      </Box>
    </DndContext>

  )
}

export default BoardContent