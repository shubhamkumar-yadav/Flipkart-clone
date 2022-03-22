import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Login } from '../Login/Login';
import { LoginContext } from '../../context/ContextProvider.jsx';
import { Profile } from './Profile.jsx';
const useStyle = makeStyles({
    login: {
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'unset',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontSize: 12,
            alignItems: 'center',
            textDecoration: 'none',
            color: 'white'
        }
    },
    container: {
        display: 'flex'
    }
});
const HeaderButtons = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    const {cartItems} = useSelector(state=>state.cart);
    return (<>
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <Link>
                    <Button variant='contained' className={classes.login} onClick={() => setOpen(true)}>Login</Button>
                </Link>
            }
            <Link><Typography style={{ marginTop: 6 }}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10, fontSize: 12, color: 'white' }}>Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    </>);
};
export { HeaderButtons };