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
            backgroundColor: '#bdc3c7',
            borderRadius:'8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: '#00b894',
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
        root: ({theme})=>({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme})=>{
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.light
            },
            '&:hover':{
              '.MuiOutlinedInput-notchedOutline':{
                borderColor: theme.palette.primary.main
              }
            },
            '& fieldset':{
              borderWidth: '1px !important'
            }
          }
        },
      },
    },
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