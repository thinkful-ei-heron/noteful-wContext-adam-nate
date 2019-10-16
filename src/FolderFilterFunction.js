import React from 'react'
import {Link} from 'react-router-dom'
import FolderSidebar from './FolderSidebar'
import Notes from './Notes'
import NotefulContext from './notefulContext'

class FolderFilterFunction extends React.Component {
  static contextType = NotefulContext;
  
  render() {
  const folder = this.context.notes.filter(note => 
    note.folderId === this.props.match.params.folderId
  )
  return (
    <div className='Folder'>
      <header className="header">
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>

      <div className="container">
        <div className='sidebar'>
          <FolderSidebar folders={this.context.folders} activeFolderId={this.props.match.params.folderId}/>
        </div>
        <main className='main'>
          <Notes notes={folder} />
        </main>
      </div>
  </div>

  )
  }
}

export default FolderFilterFunction;