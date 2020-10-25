import React from 'react';
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default class NavBar extends React.Component {
    render() {

console.log(window.location.pathname); //yields: "/js" (where snippets run)
console.log(window.location.href); 
        return(
        <div className="navbox">
            <AppBar className="appMenu" position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className="titleClass">
                // RFX / Questions & Answer {window.location.pathname.split("/")[1] === "" ? "/Search" : window.location.pathname } 
                </Typography>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
                <Button >Madhusudhan K M</Button>
                </Toolbar>
            </AppBar>
    </div> )
    }
}