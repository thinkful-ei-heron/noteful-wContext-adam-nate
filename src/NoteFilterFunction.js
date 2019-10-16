import React from 'react' 
import {Link} from 'react-router-dom'
import BackButton from './BackButton'
import Notes from './Notes'
import NotefulContext from './notefulContext'

class NoteFilterFunction extends React.Component {
  static contextType = NotefulContext;

  render() {
  const thisNote = this.context.notes.filter(note => 
    note.id === this.props.match.params.noteId
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
          <BackButton folders={this.context.folders} activeFolderId={thisNote[0].folderId} goBack={this.props.goBack}/>
        </div>
        <main className='main'>
          <Notes notes={thisNote} filter={true}/>
        </main>
      </div>
  </div>

  )
  }
}

export default NoteFilterFunction;