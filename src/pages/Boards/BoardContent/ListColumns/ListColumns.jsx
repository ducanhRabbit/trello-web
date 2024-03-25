import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
function ListColumns() {

  return (
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
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
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
  )
}

export default ListColumns