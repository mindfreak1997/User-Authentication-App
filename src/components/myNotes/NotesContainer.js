import React from 'react'
import Addnotes from './AddNote'
import NotesList from './NotesList'


const NotesContainer = () => {


    return (
        <div>
            <NotesList />
            <Addnotes />
        </div>
    )
}

export default NotesContainer
