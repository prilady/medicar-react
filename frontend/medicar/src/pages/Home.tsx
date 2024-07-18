import React, { useState } from "react";
//import AuthService from "../services/AuthService";
import SignIn from "./SignIn";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AuthService from "../services/AuthService";

const Home = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = () => {
        AuthService.logout();
      };
    
      const currentUser = AuthService.getCurrentUser();

      if (!currentUser) {
           return <SignIn />
      }

return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
         id="demo-positioned-menu"
         aria-labelledby="demo-positioned-button"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         anchorOrigin={{
           vertical: 'top',
           horizontal: 'left',
         }}
         transformOrigin={{
           vertical: 'top',
           horizontal: 'left',
         }}
      >
        <MenuItem onClick={handleClose}>New negotiation</MenuItem>
        <MenuItem onClick={handleClose}>My negotiation</MenuItem>
        <MenuItem onClick={handleClose}>My invites</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
);

}

export default Home;