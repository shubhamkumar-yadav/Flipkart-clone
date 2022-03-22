import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { addToCart } from '../../redux/actions/cartActions.js';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
const useStyle = makeStyles({
    leftContainer:{
        padding:'40px 0 0 80px'
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0',
        width:'95%'
    },
    button:{
        height:50,
        width:'46%',
        borderRadius:2
    },
    addToCart:{
        background:'#ff9f00',
        color:'#fff',
        marginRight:10
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff'
    }
});
const ActionItems = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const addItemToCart = ()=>{
        dispatch(addToCart(product.id));
        history.push('/cart');
    };
    return (<>
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} alt="detailurl" className={classes.image} />
            <Button onClick={()=>addItemToCart()} variant='contained' className={clsx(classes.button,classes.addToCart)}><ShoppingCartIcon />Add to Cart</Button>
            <Button variant='contained' className={clsx(classes.button,classes.buyNow)}><FlashOnIcon />Buy Now</Button>
        </Box>
    </>);
};
export { ActionItems };