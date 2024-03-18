import { Box } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { FaTrello } from 'react-icons/fa'


function AppBar() {
  return (
    <Box sx={{
      height:(theme) => theme.trello.appBarHeight,
      width:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
    }}>
      <Box>
        <AppsIcon sx={{
          color:'primary.main'
        }}/>
        <FaTrello size={24} color='primary.main'/>
      </Box>
      <Box>
        <ModeSelect></ModeSelect>
      </Box>
    </Box>
  )
}

export default AppBar