import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyle = makeStyles({
    component:{
        background:'#fff',
        marginLeft:'15px'
    },
    header:{
        padding :'16px 24px',
        borderBottom :'1px solid #f0f0f0'
    },
    container:{
        padding :'15px 24px',
        '& > *':{
            marginTop:20,
            fontSize:14
        }
    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        float:'right'
    },
    totalamount:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px dashed #e0e0e0',
        padding:'20px 0',
        borderBottom:'1px dashed #e0e0e0'
    }
});
const TotalView = ({ cartItems }) => {
    const classes = useStyle();
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    const totalAmount = ()=>{
        let price=0,discount=0;
        cartItems.map((item)=>{
            price = price + item.price.mrp;
            discount = discount + (item.price.mrp-item.price.cost);
        })
        setPrice(price);
        setDiscount(discount);
    };
    useEffect(()=>{
        totalAmount();
    },[cartItems]);
    return (<>
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.container}>
                <Typography>Price  ({cartItems.length} item) <span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount <span className={classes.price}>-₹{discount}</span></Typography>
                <Typography>Delivery Charge <span className={classes.price}>₹40</span></Typography>
                <Typography className={classes.totalamount}>Total Amount <span className={classes.price}>₹{price-discount+40}</span></Typography>
                <Typography style={{color:'green'}}>You will save ₹{discount}</Typography>
            </Box>
        </Box>
    </>);
};
export { TotalView };