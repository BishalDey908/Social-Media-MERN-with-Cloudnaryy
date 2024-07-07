import React, { useEffect, useState } from 'react'
import Home from '../Home'
import Firstpage from './Firstpage'

const protectFirstpage = () => {
    const [user,setUser] = useState("")
    useEffect(()=>{
        setUser(localStorage.getItem("username"))
    },[user])

    if(user){
        console.log(user)
        return <Home/>
            
    }else{
        return <Firstpage/>
    }
}

export default protectFirstpage
