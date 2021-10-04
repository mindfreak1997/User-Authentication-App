import React from'react'
import { useDispatch } from 'react-redux'
import { startUserNotes } from '../../Actions/notesAction'
import NotesForm from './NoteForm'

const Addnotes=()=>{
    const dispatch=useDispatch()
    const formSubmission=(FormData,resetForm)=>{
     dispatch(startUserNotes(FormData,resetForm))
    }
    return (
        <div>
        <NotesForm formSubmission={formSubmission}/>
        </div>
    )
}
export default Addnotes