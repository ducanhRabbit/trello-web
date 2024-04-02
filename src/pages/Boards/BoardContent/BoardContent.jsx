import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder}  from '~/util/formatter'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({board}) {
  const pointer = useSensor(PointerSensor,{
    activationConstraint: {
      distance: 10,
    },
  })
  const sensor = useSensors(pointer)
  const [oderedColumnsState,setOderedColumnsState] = useState([])

  useEffect(()=>{
    const oderedColumns = mapOrder(board?.columns,board?.columnOrderIds,'_id')
    setOderedColumnsState(oderedColumns)
  },[board])

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
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensor}>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        height: (theme) => theme.trello.boardContentHeight,
        width:'100%',
        display:'flex',
        p:'10px 0'
      }}>
        <ListColumns columns={oderedColumnsState}/>
      </Box>
    </DndContext>

  )
}

export default BoardContent