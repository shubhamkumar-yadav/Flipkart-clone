import React from 'react';
import { ImageURL } from '../../constants/data';
import { makeStyles,Grid } from '@material-ui/core';
const useStyle = makeStyles(theme=>({
    wrapper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
    },
    help:{
        [theme.breakpoints.down('md')]:{
            objectFit:'cover',
            height:120
        }
    }
}));
const MidSection = ()=>{
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (<>
    <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
        {ImageURL.map((image,index)=>(
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={image} alt={`${index} image`} style={{width:'100%'}} />
            </Grid>
        ))}
    </Grid>
    <img src={coronaURL} className={classes.help} alt="coronaImg" style={{width:'100%',marginTop:20}}/>
    </>);
};
export {MidSection};