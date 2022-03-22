import { Typography,Menu,MenuItem, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({
    component:{
        marginTop:40
    },
    logout:{
        marginLeft:20,
        fontSize:'14px'
    }
});
const Profile = ({ account, setAccount }) => {
    const classes = useStyle();
    const [open,setOpen] =useState(false);
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    };
    const logout = ()=>{
        setAccount('');
    };
    return (<>
        <Link><Typography style={{ marginTop: '7px',fontSize:'15px',fontWeight:500 }} onClick={handleClick}>{account}</Typography></Link>
        <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            className={classes.component}
        >
            <MenuItem onClick={()=>{handleClose();logout();}}><PowerSettingsNewIcon fontSize='small' color='primary' /><Typography className={classes.logout}>Logout</Typography></MenuItem>
        </Menu>
    </>);
};
export { Profile }