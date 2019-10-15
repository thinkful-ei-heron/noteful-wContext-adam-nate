import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import STORE from './dummy-store';
import Notes from './Notes';
import FolderSidebar from './FolderSidebar'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes
    };
  }

  render() {
    return (
      <div className='Mainpage'>
        <header className="header">
          <Link path='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="container">
          <div className='sidebar'>
            <FolderSidebar folders={this.state.folders}/>
          </div>
          <main className='main'>
            <Notes notes={this.state.notes} />
          </main>
        </div>
      </div>
    )
  }
}

export default Main;