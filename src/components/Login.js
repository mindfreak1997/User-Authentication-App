import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../Actions/userAction'
const Login = (props) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [formError,setError]=useState({})
  const dispatch=useDispatch()

 
var errors={}
    const validation=()=>{
        if(email.length===0){
            errors.email='email cannot be blank'
        } if(password.length===0){
            errors.password='password cannot be blank'
        }
    }

const handleChange=(e)=>{
 if(e.target.name=='email'){
     setEmail(e.target.value)
 }else if(e.target.name=='password'){
     setPassword(e.target.value)
 }
}
const redirectHome=()=>{
    props.history.push('/')
}
const handleSubmit=(e)=>{
    e.preventDefault()
    setError({})
    validation()
    
    if(Object.keys(errors).length===0){
        const formData={
            email:email,
            password:password
        }
       dispatch(loginAction(formData,redirectHome)) 
    }
}
    return (
        <div>
            <h1>Login To Your Account</h1>
           <form onSubmit={handleSubmit}>
             <input type='text' value={email} placeholder='Enter Email' name='email' onChange={handleChange} /> 
             {
                 formError.email && <span style={{color:'red'}}>{ formError.email} </span>
             }
              <br/>
             <input type='password' value={password} placeholder='Enter password' name='password' onChange={handleChange} /> 
             {
                 formError.password && <span style={{color:'red'}}>{ formError.password} </span>
             }
             <br/>
             <input type='submit' value='Login' />  <button onClick={redirectHome}>Cancel</button>
           </form> 
        </div >
    )
}

export default Login
