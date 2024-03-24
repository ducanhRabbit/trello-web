import { Box, Tooltip, Typography } from '@mui/material'
import theme from '~/theme'
import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
function BoardContent() {
  const COLUMN_HEADER_HEIGHT = '56px'
  const COLUMN_FOOTER_HEIGHT = '56px'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      backgroundColor: (theme)=> (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      height: (theme) => theme.trello.boardContentHeight,
      width:'100%',
      display:'flex',
      p:'10px 0'
    }}>
      <Box sx={{
        backgroundColor:'inherit',
        width:'100%',
        height:'100%',
        display:'flex',
        overflowY:'hidden',
        overflowX:'auto',
        '&::-webkit-scrollbar-track':{
          m: 2
        },
      }}>
        <Box sx={{
          width: '300px',
          backgroundColor: (theme) => (theme.palette.mode === 'dark'? '#333643' : '#ebecf0'),
          ml:2,
          borderRadius: '6px',
          height:'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            p:2,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <Typography variant='h5' sx={{
              fontWeight:'bold',
              cursor:'pointer'
            }}>Column Title</Typography>
            <Box>
              <Tooltip title='More options'>
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-column' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                </ExpandMoreIcon>
              </Tooltip>
              <Menu
                id="basic-menu-column"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuList>
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this colums</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive thi column</ListItemText>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            p:'0 5px',
            m:'0 5px',
            display:'flex',
            flexDirection:'column',
            gap:1,
            overflowX:'hidden',
            overflowY:'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '#ced0da',
              borderRadius:'8px'
            },
            '&::-webkit-scrollbar-thumb:hover':{
              backgroundColor: '#bfc2cf',
              borderRadius:'8px'
            }
          }}>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>

          </Box>
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p:2,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <Button startIcon={<AddCardIcon/>}>Add new card</Button>
            <Tooltip title={'Drag to move'}>
              <DragHandleIcon/>
            </Tooltip>
          </Box>

        </Box>
        <Box sx={{
          width: '300px',
          backgroundColor: (theme) => (theme.palette.mode === 'dark'? '#333643' : '#ebecf0'),
          ml:2,
          borderRadius: '6px',
          height:'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            p:2,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <Typography variant='h5' sx={{
              fontWeight:'bold',
              cursor:'pointer'
            }}>Column Title</Typography>
            <Box>
              <Tooltip title='More options'>
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-column' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                </ExpandMoreIcon>
              </Tooltip>
              <Menu
                id="basic-menu-column"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown'
                }}
              >
                <MenuList>
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this colums</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive thi column</ListItemText>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            p:'0 5px',
            m:'0 5px',
            display:'flex',
            flexDirection:'column',
            gap:1,
            overflowX:'hidden',
            overflowY:'auto',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '#ced0da',
              borderRadius:'8px'
            },
            '&::-webkit-scrollbar-thumb:hover':{
              backgroundColor: '#bfc2cf',
              borderRadius:'8px'
            }
          }}>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>
            <Card sx={{
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
            </Card>

          </Box>
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p:2,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
            <Button startIcon={<AddCardIcon/>}>Add new card</Button>
            <Tooltip title={'Drag to move'}>
              <DragHandleIcon/>
            </Tooltip>
          </Box>

        </Box>
      </Box>

    </Box>
  )
}

export default BoardContent