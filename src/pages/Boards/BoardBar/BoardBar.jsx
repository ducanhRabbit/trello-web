import { Avatar, AvatarGroup, Box, Chip, Tooltip, Button } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/util/formatter'
function BoardBar({board}) {
  return (
    <Box sx={{
      px:2,
      height:(theme) => theme.trello.boardBarHeight,
      width:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX:'auto',
      position:'relative',
      backgroundColor: (theme) => (theme.palette.mode === 'dark'? '#2c3e50' : '#1976d2'),
      '&::before':{
        content:'""',
        position:'absolute',
        bottom: 0,
        width: (theme)=> `calc(100% - ${theme.spacing(2)} * 2)`,
        height:'2px',
        backgroundColor:'#ecf0f1',
        borderRadius:'200px'
      }
    }}>      
      <Box >
        <Chip icon={<DashboardIcon />} label={board?.title} clickable sx={{
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
        <Chip icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)} clickable sx={{
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