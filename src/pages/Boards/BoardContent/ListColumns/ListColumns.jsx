import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
function ListColumns({columns}) {
  return (
    <SortableContext items={columns?.map((c)=> c._id)} strategy={horizontalListSortingStrategy}>
    <Box sx={{
      backgroundColor:'inherit',
      width:'100%',
      height:'100%',
      display:'flex',
      overflowY:'hidden',
      overflowX:'auto',
      '&::-webkit-scrollbar-track':{
        m: 2
      }
    }}>
      {columns?.map((column)=>{
        return <Column key={column._id} column={column}/>
      })}
      {/* <Column/> */}
      <Box sx={{
        width:'200px',
        flexShrink:0,
        flexGrow:0,
        backgroundColor:'#ffffff3d',
        height:'fit-content',
        borderRadius:'6px',
        mx: 2
      }}>
        <Button sx={{
          color:'white',
          width:'100%'
        }} startIcon={<NoteAddIcon/>}>
            Add new column
        </Button>
      </Box>
    </Box>
    </SortableContext>
  )
}

export default ListColumns