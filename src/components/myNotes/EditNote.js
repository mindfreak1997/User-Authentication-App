import { useDispatch } from 'react-redux'
import { editItem } from '../../Actions/notesAction'
import React from 'react'
import NotesForm from './NoteForm'

function EditNote(props) {
    const dispatch=useDispatch()
    const {title,body,id}=props
    const formSubmission=(FormData,id,handleToggle)=>{
        dispatch(editItem(FormData,id,handleToggle))
        
    }
    return (
        <div>
           <NotesForm title={title} body={body} id={id}  formSubmission={formSubmission}/> 
        </div>
    )
}

export default EditNote
