import React from 'react'
import {Link} from 'react-router-dom'
import STORE from './dummy-store'
import BackButton from './BackButton'
import Notes from './Notes'

export default function NoteFilterFunction(props) {
  const thisNote = STORE.notes.filter(note => 
    note.id === props.match.params.noteId
  )
  console.log(thisNote[0].folderId)
  return (
    <div className='Folder'>
      <header className="header">
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>

      <div className="container">
        <div className='sidebar'>
          <BackButton folders={STORE.folders} activeFolderId={thisNote[0].folderId} goBack={props.goBack}/>
        </div>
        <main className='main'>
          <Notes notes={thisNote} filter={true}/>
        </main>
      </div>
  </div>

  )
}
