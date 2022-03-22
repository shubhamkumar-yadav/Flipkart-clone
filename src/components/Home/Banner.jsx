import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles, Slide } from '@material-ui/core';
const useStyle = makeStyles(theme=>({
    image:{
        width:'100%',
        height:280,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180
        }

    },
    Carousel:{
        marginTop:10,
        [theme.breakpoints.down('sm')]:{
            height:185
        }
    }
}));
const Banner = ()=>{
    const classes= useStyle();
    return (<>
    <Carousel 
    autoPlay={true} 
    animation='slide' 
    indicators={false} 
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsProps={{
        style:{
            background:'#ffffff',
            color:'#494949',
            borderRadius:0,
            margin:0,
            height:60,
        }
    }}
    className={classes.Carousel}>
        {bannerData.map((image,i)=>(
            <img src={image} alt={`${i}image`} key={image} className={classes.image} />
        ))}
    </Carousel>
    </>);
};
export {Banner};