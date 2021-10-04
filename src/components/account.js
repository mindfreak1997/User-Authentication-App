import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Acount=(props)=>{
    const [account,setaccount]=useState({})
    useEffect(()=>{
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        
        .then((res)=>{
            setaccount(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    
    return (
        <div>
         <b>name:{account.username}</b> <br/>
         <b>email:{account.email}</b><br/>
         <b>created At-{account.createdAt}</b>
        </div>
    )
}
export default Acount