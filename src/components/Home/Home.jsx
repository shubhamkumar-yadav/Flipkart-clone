import React, { useEffect } from 'react';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Slide } from './Slide';
import { Box,makeStyles } from '@material-ui/core';
import { MidSection } from './MidSection';
import { getProducts } from '../../redux/actions/productActions.js';
import {useDispatch, useSelector} from 'react-redux';
const useStyle = makeStyles(theme=>({
    component:{
        padding:0,
        background:'#f2f2f2',
    },
    leftComponent:{
        width:'83%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
    },
    rightwrapper:{
        background:'#ffffff',
        padding:5,
        margin:'12px 0 0 10px',
        width:'17%',
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    }
}));
const Home = ()=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const classes = useStyle();
    const {products} = useSelector((state)=>state.getProductsReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[]);
    return (<div>
    <NavBar />
    <Box className={classes.component}>
        <Banner />
        <Box style={{display:'flex'}}>
            <Box className={classes.leftComponent}>
                <Slide timer={true} title="Deal of the Day" products={products}/>
            </Box>
            <Box className={classes.rightwrapper}>
                <img src={adURL} alt="ads" style={{width:'230px'}}/>
            </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts for You" products={products}/>
        <Slide timer={false} title="Suggested items" products={products}/>
        <Slide timer={false} title="Top Selection" products={products}/>
        <Slide timer={false} title="Recommended items" products={products}/>
        <Slide timer={false} title="Bestsellers" products={products}/>
    </Box>
    </div>);
};
export {Home};