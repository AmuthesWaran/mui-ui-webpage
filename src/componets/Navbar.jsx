import { AcUnit, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Link, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';


const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white"
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "white"
  display:"flex",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));


export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' >
       <StyledToolBar>
        <Typography varient="h6" sx={{display:{xs:"none", sm:"block"}}} >Carpe Diem</Typography>
        <AcUnit sx={{display:{xs:"block", sm:"none"}}} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
        <Badge badgeContent={2} color="error">
        <MailIcon />
        </Badge>
        <Badge badgeContent={1} color="error">
        <Notifications />
        </Badge>
        <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        onClick={e=>setOpen(true)} />
        </Icons>
        <UserBox onClick={e=>setOpen(true)} >
        <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Typography variant='span' >Admin</Typography>
        </UserBox>

       </StyledToolBar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem><Link href="Login.jsx" >Logout</Link></MenuItem>
      </Menu>
    </AppBar>
  )
}
