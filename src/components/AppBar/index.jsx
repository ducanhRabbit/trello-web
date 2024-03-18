import { Box } from '@mui/material'
import ModeSelect from '../ModeSelect'


function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      height:(theme) => theme.trello.appBarHeight,
      width:'100%',
      display:'flex',
      alignItems:'center'
    }}>
      <ModeSelect></ModeSelect>
    </Box>
  )
}

export default AppBar