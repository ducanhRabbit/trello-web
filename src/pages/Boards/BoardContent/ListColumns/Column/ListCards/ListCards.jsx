import { Box, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Card from './Card/Card'
import { Card as MuiCard } from '@mui/material'

function ListCards({cards}) {

  return (
    <Box sx={{
      p:'0 5px',
      m:'0 5px',
      display:'flex',
      flexDirection:'column',
      gap:1,
      overflowX:'hidden',
      overflowY:'auto',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
      '&::-webkit-scrollbar-thumb':{
        backgroundColor: '#ced0da',
        borderRadius:'8px'
      },
      '&::-webkit-scrollbar-thumb:hover':{
        backgroundColor: '#bfc2cf',
        borderRadius:'8px'
      }
    }}>
      {cards?.map((card)=> (<Card card={card} key={card._id}/>))}
    </Box>
  )
}

export default ListCards