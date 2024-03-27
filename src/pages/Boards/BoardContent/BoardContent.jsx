import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder}  from '~/util/formatter'

function BoardContent({board}) {
  const oderedColumns = mapOrder(board?.columns,board?.columnOrderIds,'_id')
  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      height: (theme) => theme.trello.boardContentHeight,
      width:'100%',
      display:'flex',
      p:'10px 0'
    }}>
      <ListColumns columns={oderedColumns}/>
    </Box>

  )
}

export default BoardContent