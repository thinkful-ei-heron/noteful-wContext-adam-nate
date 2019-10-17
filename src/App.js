import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './Main'
import FolderFilterFunction from './FolderFilterFunction'
import NoteFilterFunction from './NoteFilterFunction'
import NotFoundPage from './NotFoundPage'
import './App.css'
import NotefulContext from './notefulContext'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: []
    };
    this.getNotes();
    this.getFolders();
  }


  getFolders = () => {
    return fetch('http://localhost:9090/folders')
      .then(res => res.json())
      .then(res => { this.setState({
          folders: res
        })
      })
      .catch(err => console.log('Error'))
  }

  getNotes = () => {
    return fetch('http://localhost:9090/notes')
      .then(res => res.json())
      .then(res => this.setState({
        notes: res
      }))
      .catch(err => console.log('Error'))
  }

  deleteFromState = (data) => {
    console.log(data)
    const newNotes= this.state.notes.filter(note => note.id !== data)
    this.setState({
      notes: newNotes
    })
  }
  
  deleteNoteFetch = (noteId) => {
    console.log(noteId)
    return fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      }})
      .then(res => {
        if (!res.ok ){
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        this.deleteFromState(data)  
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNoteFetch
                  /* this.deleteFromState] How do I render at the same time so i dont 
                    have to refresh to view result?*/
    }
    console.log(contextValue);
    
    return (
      <NotefulContext.Provider value={contextValue}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/folder/:folderId' render={(props) => {
            return (
              <FolderFilterFunction match={props.match} history={props.history} />)
          }} />
          <Route path='/note/:noteId' render={(props) => {
            return (
              <NoteFilterFunction match={props.match} history={props.history} goBack={() => props.history.push('/')} />
            )
          }} />
          <Route component={NotFoundPage} />
        </Switch>
      </NotefulContext.Provider>
    )
  }
}

export default App;