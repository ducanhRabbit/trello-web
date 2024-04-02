import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder}  from '~/util/formatter'
import { DndContext, PointerSensor, useSensor, useSensors ,DragOverlay, defaultDropAnimationSideEffects} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

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

  useEffect(()=>{
    const oderedColumns = mapOrder(board?.columns,board?.columnOrderIds,'_id')
    setOderedColumnsState(oderedColumns)
  },[board])

  const handleDragStart = (e)=>{
    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
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

  const handleDragEnd = (e)=>{
    console.log(e)
    const {active,over} = e
    if(!over) return
    if(active.id!= over.id){
      const oldIndex = oderedColumnsState.findIndex((c)=> c._id === active.id)
      const newIndex = oderedColumnsState.findIndex((c)=> c._id === over.id)

      const dndOderedColumns = arrayMove(oderedColumnsState,oldIndex,newIndex)
      setOderedColumnsState(dndOderedColumns)
    }

    setActiveDragItemData(null)
    setActiveDragItemId(null)
    setActiveDragItemType(null)
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