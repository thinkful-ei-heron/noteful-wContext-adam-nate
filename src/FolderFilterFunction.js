import React from 'react'
import {Link} from 'react-router-dom'
import STORE from './dummy-store'
import FolderSidebar from './FolderSidebar'
import Notes from './Notes'

export default function FolderFilterFunction(props) {
  const folder = STORE.notes.filter(note => 
    note.folderId === props.match.params.folderId
  )
  console.log(folder)
  return (
    <div className='Folder'>
      <header className="header">
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>

      <div className="container">
        <div className='sidebar'>
          <FolderSidebar folders={STORE.folders} activeFolderId={props.match.params.folderId}/>
        </div>
        <main className='main'>
          <Notes notes={folder} />
        </main>
      </div>
  </div>

  )
}
