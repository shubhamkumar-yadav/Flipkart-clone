import React, { useState } from 'react';
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';
import { authenticateSignup,authenticateLogin } from '../../service/api.js';
const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#ffffff',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        background: '#fb641b',
        color: '#ffffff',
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0px 2px 4px 0px rgb(0 0 0 / 20%)'
    },
    createText: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    error:{
        fontSize:10,
        color:'#ff6161',
        marginTop:10,
        fontWeight:600,
        lineHeight:0
    }
});
const initialValue = {
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Whitlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:`Looks like you're' new here!`,
        subHeading:'Sign up with your mobile number to get started'
    }
}
const signupInitialValues ={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""


}
const loginInitialValues ={
    username:"",
    password:""
}
const Login = ({ open, setOpen, setAccount }) => {
    const [account, toggleAccount] = useState(initialValue.login);
    const [signup,setSignup]= useState(signupInitialValues);
    const [login,setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    const classes = useStyle();
    const signupUser = async ()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        setOpen(false);
        toggleAccount(initialValue.login);
        setAccount(signup.username);
    };
    const loginUser = async ()=>{
        let response = await authenticateLogin(login);
        if(!response) {
            setError(true);
            return
        }
        setOpen(false);
        toggleAccount(initialValue.login);
        setAccount(login.username);
    };
    const onInputChange = (event)=>{
        setSignup({...signup,[event.target.name]:event.target.value})
    };
    const onValueChange = (event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    };
    return (<>
        <Dialog open={open} onClose={() => <>{setOpen(false)} {toggleAccount(initialValue.login)}</>}>
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20, color: '#d4d6d9' }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === "login" ?
                            <Box className={classes.login}>
                                <TextField name='username' label='Enter Username/Email' onChange={(event)=>onValueChange(event)} />
                                <TextField name='password' label='Enter Password' onChange={(event)=>onValueChange(event)} />
                                {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant='contained' className={classes.loginBtn} onClick={()=>loginUser()}>Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant='contained' className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={()=>toggleAccount(initialValue.signup)} className={classes.createText}>New to Flipkart? Create an account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(event)=>onInputChange(event)} name='firstname' label='Enter FirstName' />
                                <TextField onChange={(event)=>onInputChange(event)} name='lastname' label='Enter LastName' />
                                <TextField onChange={(event)=>onInputChange(event)} name='username' label='Enter UserName' />
                                <TextField onChange={(event)=>onInputChange(event)} name='email' label='Enter Email' />
                                <TextField onChange={(event)=>onInputChange(event)} name='password' label='Enter Password' />
                                <TextField onChange={(event)=>onInputChange(event)} name='phone' label='Enter PhoneNumber' />
                                <Button variant='contained' className={classes.loginBtn} onClick={()=>signupUser()}>Signup</Button>
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    </>);
};
export { Login };