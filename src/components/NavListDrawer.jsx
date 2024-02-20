import { Delete, Drafts, Inbox } from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const NavListDrawer = () => {
  return (
    <Box sx={{width: 250, bgcolor: "lightsalmon"}}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon><Inbox /></ListItemIcon>
            <ListItemText primary="Imbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Drafts /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#trash">
              <ListItemText>Trash</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#spam">
              <ListItemText>Spam</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default NavListDrawer
