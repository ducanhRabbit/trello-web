import { Avatar, AvatarGroup, Box, Chip, Tooltip, Button } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
function BoardBar() {
  return (
    <Box px={2} sx={{
      height:(theme) => theme.trello.boardBarHeight,
      width:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX:'auto',
      borderBottom:'2px solid #00b894',
      backgroundColor: (theme) => (theme.palette.mode === 'dark'? '#2c3e50' : '#1976d2')
    }}>
      <Box >
        <Chip icon={<DashboardIcon />} label="Stacks Board" clickable sx={{
          color: 'white',
          backgroundColor:'transparent',
          border:'none',
          borderRadius:'4px',
          '& .MuiSvgIcon-root':{
            color: 'white'
          },
          '&:hover':{
            backgroundColor:'primary.50'
          }
        }}/>
        <Chip icon={<VpnLockIcon />} label="Public/Private Workspace" clickable sx={{
          color: 'white',
          backgroundColor:'transparent',
          border:'none',
          borderRadius:'4px',
          '& .MuiSvgIcon-root':{
            color: 'white'
          },
          '&:hover':{
            backgroundColor:'primary.50'
          }
        }}/>
        <Chip icon={<AddToDriveIcon />} label="Add to Google Drive" clickable sx={{
          color: 'white',
          backgroundColor:'transparent',
          border:'none',
          borderRadius:'4px',
          '& .MuiSvgIcon-root':{
            color: 'white'
          },
          '&:hover':{
            backgroundColor:'primary.50'
          }
        }}/>
        <Chip icon={<BoltIcon />} label="Autonimation" clickable sx={{
          color: 'white',
          backgroundColor:'transparent',
          border:'none',
          borderRadius:'4px',
          '& .MuiSvgIcon-root':{
            color: 'white'
          },
          '&:hover':{
            backgroundColor:'primary.50'
          }
        }}/>
        <Chip icon={<FilterListIcon />} label="Filters" clickable sx={{
          color: 'white',
          backgroundColor:'transparent',
          border:'none',
          borderRadius:'4px',
          '& .MuiSvgIcon-root':{
            color: 'white'
          },
          '&:hover':{
            backgroundColor:'primary.50'
          }
        }}/>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems:'center',
        gap:2
      }}>
        <Button sx={{
          color: 'white',
          borderColor:'white',
          '&:hover':{
            borderColor:'white'
          }
        }} variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup sx={{
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize: 16,
            '&:first-of-type':{
              backgroundColor:'#a4b0de'
            }
          },
          color:'white',
          cursor:'pointer',
          
        }} max={5}>
          <Tooltip title={'Tooltip'}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/a5/fc/6e/a5fc6e97abd177846c31c3a0f9d80cba.jpg" />
          </Tooltip>
          <Tooltip title={'Tooltip'}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/a5/fc/6e/a5fc6e97abd177846c31c3a0f9d80cba.jpg" />
          </Tooltip>
          <Tooltip title={'Tooltip'}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/a5/fc/6e/a5fc6e97abd177846c31c3a0f9d80cba.jpg" />
          </Tooltip>
          <Tooltip title={'Tooltip'}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/a5/fc/6e/a5fc6e97abd177846c31c3a0f9d80cba.jpg" />
          </Tooltip>
          <Tooltip title={'Tooltip'}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/a5/fc/6e/a5fc6e97abd177846c31c3a0f9d80cba.jpg" />
          </Tooltip>
          <Tooltip title={'Tooltip'}>
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/a5/fc/6e/a5fc6e97abd177846c31c3a0f9d80cba.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar