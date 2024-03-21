import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, teal } from '@mui/material/colors'
import { BorderColor } from '@mui/icons-material'

const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  components: {
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: '#dcdde1',
            borderRadius:'8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: 'white',
            borderRadius:'8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'capitalize',
          fontSize: '1rem'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset':{
            borderWidth: '1px !important'
          },
          '&:hover fieldset':{
            borderWidth: '1.5px !important'
          },
          '&.Mui-focused fieldset':{
            borderWidth: '1.5px !important'
          }
        },
      },
    },
  },
})


export default theme