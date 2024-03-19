import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, teal } from '@mui/material/colors'

const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000'
        // }
      }
    }
  }
})


export default theme