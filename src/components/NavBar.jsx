import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import { useState } from "react"
import { Menu } from "@mui/icons-material"

const navLinks = [
  {title: "Home", path: "#"},
  {title: "Login", path: "#login"},
  {title: "Register", path: "#register"},
]
const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" size="large" onClick={() => setOpen(true)}><Menu /></IconButton>
        <Typography variant="h6" sx={{flexGrow: 1}}>News</Typography>
        {navLinks.map(el => (<Button component="a" key={crypto.randomUUID()} href={el.path} color="inherit">{el.title}</Button>))}
      </Toolbar>
    </AppBar>

    <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
      <NavListDrawer navLinks={navLinks} /> 
    </Drawer>
    </>
  )
}

export default NavBar
