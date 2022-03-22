import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box,Button,makeStyles, Typography} from '@material-ui/core';
import { CartItem } from './CartItem.jsx';
import {removeFromCart} from '../../redux/actions/cartActions.js';
import { EmptyCart } from './EmptyCart.jsx';
import { TotalView } from './TotalView.jsx';
const useStyle = makeStyles({
    component:{
        marginTop:55,
        padding:'30px 135px',
        display:'flex'
    },
    leftComponent:{
        width:'67%'
    },
    rightComponent:{
        width:'30%'
    },
    header:{
        padding:'15px 24px',
        background:'#fff'
    },
    placeOrder:{
        background:'#fb641b',
        color:'#fff',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto'
    },
    bottom:{
        padding:'10px 22px',
        background:'#fff',
        borderTop:'1px solid #f3f3f3',
        boxShadow:'0 -2px 10px 0 rgb(0 0 0/10%)'
    }
});
const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeItemFromCart = (id)=>{
        dispatch(removeFromCart(id));
    };
    const classes = useStyle();
    return (<>
        {
            cartItems.length ?
                <Box className={classes.component}>
                    <Box className={classes.leftComponent}>
                        <Box className={classes.header}>
                            <Typography style={{fontWeight:600}}>{`My Cart (${cartItems.length})`}</Typography>
                        </Box>
                        {
                            cartItems.map((value,index)=>(<CartItem item={value} key={index} removeItemFromCart={removeItemFromCart}/>))
                        }
                        <Box className={classes.bottom}>
                            <Button className={classes.placeOrder} variant='contained'>PLACE ORDER</Button>
                        </Box>
                    </Box>
                    <Box className={classes.rightComponent}>
                        <TotalView cartItems={cartItems} />
                    </Box>
                </Box>
                : <EmptyCart />
        }
    </>);
};
export { Cart };