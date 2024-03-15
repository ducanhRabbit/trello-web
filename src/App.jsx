import { useState } from 'react'
import Button from '@mui/material/Button'
import { Box, Container, useColorScheme } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <LightModeIcon />
            Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <DarkModeIcon />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Brightness4Icon />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: '100vh',
        }}
      >
        <Box sx={{
          backgroundColor: 'primary.light',
          height:(theme)=> theme.trello.appBarHeight,
          width:'100%',
          display:'flex',
          alignItems:'center'
        }}>
          <ModeSelect></ModeSelect>
        </Box>
        <Box sx={{
          backgroundColor: 'primary.dark',
          height:(theme)=> theme.trello.boardBarHeight,
          width:'100%',
          display:'flex',
          alignItems:'center'
        }}>Board Bar</Box>
        <Box sx={{
          backgroundColor: 'primary.main',
          height:(theme)=> `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          width:'100%',
          display:'flex',
          alignItems:'center'
        }}>
          Board Content
        </Box>
      </Container>
    </>
  )
}

export default App
