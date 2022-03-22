import React, { useState } from 'react';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
const useStyle = makeStyles({
    component:{
        marginTop:'30px'
    },
    button:{
        borderRadius:'50%'
    }
});
const GroupButtons = () => {
    const classes = useStyle();
    const [counter,setCounter] = useState(1);
    const handleIncrement = ()=>{
        setCounter(counter+1);
    };
    const handleDecrement = ()=>{
        setCounter(counter-1);
    };
    return (<>
        <ButtonGroup className={classes.component}>
            <Button className={classes.button} onClick={()=>handleDecrement()} disabled={counter===1}>-</Button>
            <Button>{counter}</Button>
            <Button className={classes.button} onClick={()=>handleIncrement()}>+</Button>
        </ButtonGroup>
    </>);
};
export { GroupButtons };