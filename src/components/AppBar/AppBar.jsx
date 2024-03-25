import { Badge, Box, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { FaTrello } from 'react-icons/fa'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflowX:'auto',
        gap:2,
        backgroundColor: (theme) => (theme.palette.mode === 'dark'? '#2c3e50' : '#1565c0')
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsIcon
          sx={{
            color: 'white'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <FaTrello size={22} color="white" />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Trello
          </Typography>
          <Box sx={{
            display:{ xs:'none', md:'flex' }
          }}>
            <Workspaces />
            <Recent />
            <Started />
            <Templates />
            <Button sx={{
              color:'white',
              border:'none',
              '&:hover':{
                border:'none'
              }
            }}variant="outlined" startIcon={<AddCircleIcon/>}>Create</Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{
                  color:'white'
                }} />
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon onClick={() => {setSearchValue('')}} fontSize='small' sx={{
                display: searchValue? 'inline-block':'none',
                color:'white',
                cursor:'pointer'
              }}>
              </CloseIcon>
            )
          }}
          sx={{
            minWidth:120,
            maxWidth:170,
            '& label':{
              color:'white'
            },
            '& input':{
              color: 'white'
            },
            '& label.Mui-focused':{
              color:'white'
            },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{
                borderColor:'white'
              },
              '&:hover fieldset':{
                borderColor:'white'
              },
              '&.Mui-focused fieldset':{
                borderColor:'white'
              }
            }
          }}
        />
        <ModeSelect></ModeSelect>
        <Tooltip title="Delete">
          <Badge color="warning" variant="dot">
            <NotificationsNoneIcon sx={{
              color:'white'
            }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{
            color:'white'
          }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
