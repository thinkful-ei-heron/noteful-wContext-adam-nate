import React from 'react';
import { Link } from 'react-router-dom';

function BackButton(props) {
  const { goBack } = props
  return (
    <ul className="folder-list">
      {props.folders.map( (folder, index) => {
        return (
          <li key={folder.id} className={'folder-li' + (folder.id===props.activeFolderId ? ' highlight' : ' no-highlight')}>
            <Link to={`/folder/${folder.id}`}>
              <h2 className="folder-title">{folder.name}</h2>
            </Link>
          </li>
        ) 
      })}
      <button type="button" onClick={goBack}>Go Back</button>
    </ul>
  )
}

export default BackButton