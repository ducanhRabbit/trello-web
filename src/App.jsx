import { useState } from 'react'
import Button from '@mui/material/Button'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import { pink } from '@mui/material/colors'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>Hello</div>
      <Button variant="contained">Hello world</Button>
      <AccessibilityIcon sx={{ color: pink[500] }}/>
    </>
  )
}

export default App
