import axios from "axios"

const URL_API = 'http://localhost:3001/api'


const getUser = async function(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL_API + '/info', config)
    return res.data
}

const allUsers = async function(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL_API + '/info', config)
    return res.data
}

const updateUser = async function(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get(URL_API + '/info', config)
    return res.data
}

const userService = {
    getUser,
    updateUser,
    allUsers
}

export default userService;