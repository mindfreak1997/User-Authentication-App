import React,{useState} from 'react'


const NotesForm=(props)=>{
    const {handleToggle,formSubmission,title:heading,body:notes,id}=props
    const [title,setTitle]=useState(heading ? heading : '')
    const [body,setBody]=useState(notes ? notes : '')
    const [formError,setError]=useState({})
    const handleChange=(e)=>{
    if(e.target.name=='title'){
        setTitle(e.target.value)
    }else if(e.target.name==='body'){
        setBody(e.target.value)
    }
}
const errors={}
const runValidation=()=>{
     if(title.length==0){
         errors.title='title cannot be blank'
     }
     if(body.length==0){
         errors.body='body cannot be blank'
     }
}
const handleSubmit=(e)=>{
      e.preventDefault()
      runValidation()
      if(Object.keys(errors).length===0){
        const  FormData={
              title:title,
              body:body
          }
          console.log(FormData)
          const resetForm=()=>{
            setTitle('')
            setBody('')
          }
          formSubmission(FormData,resetForm,id,handleToggle)
         
      }else{
          setError(errors)
      }
}
    return(
        <div>
            <h2>Add Note</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' value={title} onChange={handleChange} name='title'/>
                {
                    formError.title && <span style={{color:'red'}}>{formError.title}</span>
                }
                 <br/>
                <textarea type='text' placeholder='Body' value={body} onChange={handleChange} name='body'/>
                {
                    formError.body && <span style={{color:'red'}}>{formError.body}</span>
                }
                <br/>
                <input type='submit' value='save'/>
            </form>
        </div>
    )
}
export default NotesForm 