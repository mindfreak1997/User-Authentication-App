import axios from 'axios'
import React, {useState} from'react'
import { useDispatch } from 'react-redux'
import EditNote from './EditNote'
import swal from 'sweetalert'
import { itemRemove } from '../../Actions/notesAction'

const NotesItem=(props)=>{
    const dispatch=useDispatch()
    const {title,body,_id,}=props
    const [toggle,setToggle]=useState(false)
    const handleRemove=()=>{
        dispatch(itemRemove(_id))
    }
    const handleToggle=()=>{
       setToggle(!toggle)
    }
    //when a specific item is clicked sweet alert contaning the notes details pops up
    const handleItem=()=>{
         axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,
        {
            headers:{
                'x-auth':localStorage.getItem('token')
            }  
        })
        .then((res)=>{
            const result=res.data
            swal(result.title,result.body)
        }) 

    }
    return (
        <div>
            {
                toggle ? (
                 <React.Fragment>
                 <EditNote title={title} body={body} id={_id} handleToggle={handleToggle}/>
                 <button onClick={handleToggle}>Cancel</button>
                 </React.Fragment>
                ):(
                 <React.Fragment>
                 <blockquote onClick={handleItem}>{body}</blockquote> <br/>
                 <button onClick={handleToggle} >edit</button>
                 <button onClick={handleRemove}>Remove</button>
                 </React.Fragment>
      
        
                )
            }
        </div>
        
    )
}
export default NotesItem