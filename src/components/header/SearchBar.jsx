import { InputBase,makeStyles,fade } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
const useStyle = makeStyles((theme)=>({
    search:{
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
    },
    searchIcon:{
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
    },
    inputRoot:{
        fontSize: 13,
        width: '100%'
    },
    inputInput: {
        paddingLeft: 20,
        width: '100%',
    }
}));
const SearchBar = ()=>{
    const classes = useStyle();
    return (<>
    <div className={classes.search}>
        <InputBase 
        placeholder='Search for products,brands and more' 
        classes={{root:classes.inputRoot,input:classes.inputInput}} 
        inputProps={{'aria-label':'search'}} 
        />
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
    </div>
    </>);
};
export {SearchBar};