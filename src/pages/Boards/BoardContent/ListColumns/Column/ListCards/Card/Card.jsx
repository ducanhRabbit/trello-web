import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'


import { Button, Typography } from '@mui/material'
function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor:'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow:'unset'
      }}>
        <CardContent sx={{
          p: 1.5,
          '&:last-child':{
            p:1.5
          }
        }}>
          <Typography >
                  Card 01
          </Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor:'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow:'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/564x/7c/48/9d/7c489db406c2b02c39a1fc693f80c64a.jpg"
        title="green iguana"
      />
      <CardContent sx={{
        p: 1.5,
        '&:last-child':{
          p:1.5
        }
      }}>
        <Typography>
              Identity V
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<PeopleAltIcon/>} size="small">20</Button>
        <Button startIcon={<CommentIcon/>} size="small">20</Button>
        <Button startIcon={<AttachmentIcon/>} size="small">20</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card