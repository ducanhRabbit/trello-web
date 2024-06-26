import { Box, Tooltip, Typography } from '@mui/material'
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
import {mapOrder} from '~/util/formatter'
import { useState } from 'react'
import ListCards from './ListCards/ListCards'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

function Column({column}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: column._id, data:{...column}});
  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    height:'100%',
    opacity: isDragging? '50%': undefined
  };

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const oderedCards = mapOrder(column?.cards,column?.cardOrderIds,'_id')

  return (
    <div  ref={setNodeRef}
    style={dndKitColumnStyle}
    {...attributes}
    >
    <Box
    {...listeners}
     sx={{
      width: '300px',
      backgroundColor: (theme) => (theme.palette.mode === 'dark'? '#333643' : '#ebecf0'),
      ml:2,
      borderRadius: '6px',
      height:'fit-content',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
    }}>
      <Box sx={{
        height: (theme) => (theme.trello.columnHeaderHeight),
        p:2,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
        <Typography variant='h6' sx={{
          fontWeight:'bold',
          cursor:'pointer'
        }}>{column?.title}</Typography>
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
    <ListCards cards={oderedCards}/>
      <Box sx={{
        height: (theme)=> (theme.trello.columnFooterHeight),
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
    </div>
  )
}

export default Column