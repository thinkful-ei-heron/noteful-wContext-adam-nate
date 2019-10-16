import React from 'react';
import { Link } from 'react-router-dom';

import Notes from './Notes';
import FolderSidebar from './FolderSidebar'
import NotefulContext from './notefulContext'


class Main extends React.Component {
  static contextType = NotefulContext

  render() {
    
    return (
      <div className='Mainpage'>
        <header className="header">
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="container">
          <div className='sidebar'>
            <FolderSidebar />
          </div>
          <main className='main'>
            <Notes notes={this.context}/>
          </main>
        </div>
      </div>
    )
  }
}

export default Main;