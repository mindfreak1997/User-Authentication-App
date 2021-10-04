import React from'react'
import { useSelector } from 'react-redux'
import NotesItem from './NotesItem'

const NotesList=(props)=>{
    const notes=useSelector((state)=>{
        return state.notes
    })
    console.log('selector',notes)
    return (
        <div>
            <h2>My Notes-{notes.length}</h2>
            {
                notes.length==0 ? (
                    <h3>No notes added add your first note</h3>
                ):(
                    
                        notes.map((note,i)=>{
                            return <NotesItem key={i} {...note} />
                        })
                    
                )
            }
       
        </div>
        )
    }
export default NotesList