import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'


import { Button, Typography } from '@mui/material'
function Card({ card }) {
  return (
    <MuiCard sx={{
      cursor:'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow:'hidden',
      borderRadius:'6px'
    }}>
      {card?.cover && <CardMedia
        sx={{ height: 140 }}
        image={card.cover}
      />}
      
      <CardContent sx={{
        p: 1.5,
        '&:last-child':{
          p:1.5
        }
      }}>
        <Typography>
              {card?.title}
        </Typography>
      </CardContent>
      {(!!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachements?.length) && <CardActions>
        {!!card?.memberIds?.length && <Button startIcon={<PeopleAltIcon/>} size="small">20</Button>}
        {!!card?.comments?.length && <Button startIcon={<CommentIcon/>} size="small">20</Button>}
        {!!card?.attachements?.length && <Button startIcon={<AttachmentIcon/>} size="small">20</Button>}
      </CardActions>}
      
    </MuiCard>
  )
}

export default Card