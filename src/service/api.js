import axios from 'axios';
const url = 'http://localhost:8000';
const authenticateSignup = async (user)=>{
    try{
        return await axios.post(`${url}/signup`,user) ;
    }catch(error){
        console.log('error while calling api');
    }
};
const authenticateLogin = async (user)=>{
    try{
        return await axios.post(`${url}/login`,user) ;
    }catch(error){
        console.log('error while calling api');
    }
};
export {authenticateSignup,authenticateLogin};