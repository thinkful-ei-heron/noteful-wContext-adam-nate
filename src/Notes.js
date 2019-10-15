import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map( (note, index) => {
          let dateModified = (new Date(note.modified)).toString();
          return (
            <li key={note.id} className="note">
              <Link to={`/note/${note.id}`}>
                <h2 className="note-title">{note.name}</h2>
              </Link>
              <p>Modified on {dateModified}</p>
              <button>Delete Note</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Notes