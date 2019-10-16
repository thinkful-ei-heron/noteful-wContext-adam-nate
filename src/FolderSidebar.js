import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './FolderSidebar.css';
import NotefulContext from './notefulContext'

class FolderSidebar extends Component {
  static contextType = NotefulContext;

  render() {
    return (
      <ul className="folder-list">
        {this.context.folders.map( (folder, index) => {
         
          return (
            <li key={folder.id} className={'folder-li' + (folder.id===this.props.activeFolderId ? ' highlight' : ' regular')}>
              <Link to={`/folder/${folder.id}`}>
                <h2 className="folder-title">{folder.name}</h2>
              </Link>
            </li>
          )
        })}
        <button>Add Folder</button>
      </ul>
    )
  }
}

export default FolderSidebar;