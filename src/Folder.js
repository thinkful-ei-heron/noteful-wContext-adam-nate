import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import STORE from './dummy-store';
import Main from './Main';
import FolderSidebar from './FolderSidebar'

class Folder extends Component {
  render() {
    return (
      <div className='Folder'>
        <header className="header">
          <Link path='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="container">
          <div className='sidebar'>
            <FolderSidebar folders={this.state.folders} />
          </div>
          <main className='main'>
            <Main notes={this.state.notes} />
          </main>
        </div>
      </div>
    )
  }
}