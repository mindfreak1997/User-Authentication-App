import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { startUserReg } from '../Actions/userAction'


const Register = (props) => { 
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formError,setError]=useState({})
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        if(e.target.name=='name'){
            setName(e.target.value)
        }else if(e.target.name=='email'){
           setEmail(e.target.value)
       }else if(e.target.name=='password'){
           setPassword(e.target.value)
       }
    }
    var error={}
    const validation=()=>{
    if(name.length===0){
        error.name='name cannot be blank'
    } if(email.length===0){
        error.email='email cannot be blank'
    } if(password.length===0){
        error.password='password cannot be blank'
    }
    if((password.length<8 && !password.length==0 )|| password.length > 128 ){
        error.paswordLength='pasword length should be between 8-128 characters'
    }
    
    }
    const redirectLogin=()=>{
        props.history.push('/login')
    }
     const handleSubmit=(e)=>{
         e.preventDefault()
         setError({})
         validation()
        
         if(Object.keys(error).length ===0){
             const formData={
                 username:name,
                 email:email,
                 password:password
             }
             console.log(formData)
             dispatch(startUserReg(formData,redirectLogin))
         }else{
             setError(error)
         }
         
         
         
     }
     

    return (
        <div>
            <h1>Register With Us</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Enter User Name' onChange={handleChange} /> 
                {
                    formError.name &&   <span style={{color:'red'}}>{ formError.name} </span>
                }
                <br/>
                <input type='email' name='email' placeholder='Enter Email' onChange={handleChange} /> 
                {
                    formError.email &&   <span style={{color:'red'}}>{ formError.email} </span>
                }
                <br/>
                <input type='password' name='password' placeholder='Enter Password' onChange={handleChange} />
                {
                    formError.password &&   <span style={{color:'red'}}>{ formError.password} </span>
                }
                {
                    formError.paswordLength && <span style={{color:'red'}}>{formError.paswordLength}</span>
                }
                 <br/>
                <input type='submit'value='Register' /> <button onClick={redirectLogin}>Cancel</button>
            </form>
        </div>
    )
}

export default Register
