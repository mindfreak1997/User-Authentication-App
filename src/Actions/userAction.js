import axios from 'axios'

export const startUserReg=(formData,redirectLogin)=>{
    return (dispatch)=>{
     axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
     .then((res)=>{
         const result=res.data
         console.log(result)
         if(result.hasOwnProperty('errors')){
             alert(result.message)
         }else{
           
            alert('registered succesfully')
            redirectLogin()
         }        
         
     })
     .catch((err)=>{
         alert(err.message)
     })
    }
}
export const  loginAction=(formData,redirectHome)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
        .then((res)=>{
            const result=res.data
            console.log(result)
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                localStorage.setItem('token',result.token)
                redirectHome()
                alert('login is sucessfull')
                dispatch(isLogin(true))
                }
            
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const isLogin=(condition)=>{
    return{
        type:'LOGIN',
        payload:condition
    }
}

export const endUserLogout=(redirectHome)=>{
    return (dispatch)=>{
        axios.delete('http://dct-user-auth.herokuapp.com/users/logout',
        {
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }
        )
        .then((res)=>{
            const result=res.data
            if(result.hasOwnProperty('error')){
                alert(result.error)
            }else{
                localStorage.clear()
                dispatch(isLogin(false))
                redirectHome()
            }
        })
    }
}