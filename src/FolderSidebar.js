import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './FolderSidebar.css';

class FolderSidebar extends Component {
  render() {
    return (
      <ul className="folder-list">
        {this.props.folders.map( (folder, index) => {
          return (
            <li key={folder.id} className="folder-li">
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

export default FolderSidebar