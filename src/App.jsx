import { useState } from 'react'
import Button from '@mui/material/Button'
import { Box, Container, useColorScheme } from '@mui/material'
import ModeSelect from './components/ModeSelect'
import Board from './pages/Boards/_id'



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
      <Board></Board>
    </>
  )
}

export default App
