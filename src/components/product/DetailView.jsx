import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions.js';
import { Box, Table, TableRow, TableBody, TableCell, Typography,Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { LocalOffer as Badge } from '@material-ui/icons';
import { ActionItems } from './ActionItems.jsx';
const useStyle = makeStyles(theme=>({
    component: {
        marginTop: 55,
        background: '#f2f2f2'
    },
    container: {
        margin: '0px 80px',
        background: 'white',
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign:'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28,
        fontWeight: 500
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00cc00'
    }
}));
const DetailView = ({ match }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const classes = useStyle();
    const { product } = useSelector((state) => state.getProductDetailsReducer);
    const dispatch = useDispatch();
    dispatch(getProductDetails(match.params.id));
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (<>
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Box style={{ minWidth: '40%' }}>
                    <ActionItems product={product}/>
                </Box>
                <Box className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={classes.smallText} style={{color: '#878787'}}>
                        8 Ratings & 5 Reviews
                        <span><img src={fassured} alt="fassured" style={{ width: 77, marginLeft: 20 }} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#388e3c' }}>{product.price.discount}off</span>
                    </Typography>
                    <Typography style={{marginTop:20,fontWeight:600}}>Available offers</Typography>
                    <Box className={classes.smallText}>
                        <Typography><Badge className={classes.badge} />Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%</Typography>
                        <Typography><Badge className={classes.badge} />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100</Typography>
                        <Typography><Badge className={classes.badge} />Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture</Typography>
                        <Typography><Badge className={classes.badge} />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                    </Box>
                    <Table>
                        <TableBody>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                <TableCell className={classes.smallText}>
                                    <span style={{color:'#2874f0'}}>SuperComNet</span>
                                    <Typography>GST Invoice Available</Typography>
                                    <Typography>14 Days Return Policy</Typography>
                                    <Typography>view more sellers starting from ₹300</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}><img src={sellerURL} alt="sellerURL" style={{width:390}}/></TableCell>
                            </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box>
    </>);
};
export { DetailView };