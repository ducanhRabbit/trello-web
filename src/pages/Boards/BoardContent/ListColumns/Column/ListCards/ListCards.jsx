import { Box, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Card from './Card/Card'
import { Card as MuiCard } from '@mui/material'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
function ListCards({cards}) {

  return (
    <SortableContext items={cards?.map((c)=> c._id)} strategy={verticalListSortingStrategy}>
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
    </SortableContext>
  )
}

export default ListCards