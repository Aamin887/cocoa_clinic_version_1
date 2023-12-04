import axios from 'axios';

const URL_API = 'http://localhost:3001/api'

const register = async function(formData){

    const res = await axios.post(URL_API + '/register', formData);

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    
    return res.data
}

const login = async function(formData){ 

    const res = await axios.post(URL_API, formData);

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

const adminLogin = async function(formData){ 

    const res = await axios.post(URL_API, formData);

    if(res.data){
        localStorage.setItem('admin', JSON.stringify(res.data))
    }

    return res.data
}



const logout = function(){
    localStorage.removeItem('user')
}

const adminLogout = function(){
    localStorage.removeItem('admin')
}

const authService = {
    register,
    login,
    adminLogin,
    adminLogout,
    logout
}

export default authService