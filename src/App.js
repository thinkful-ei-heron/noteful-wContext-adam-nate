import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import STORE from './dummy-store';
import Main from './Main'
import FolderFilterFunction from './FolderFilterFunction'
import NoteFilterFunction from './NoteFilterFunction'
import NotFoundPage from './NotFoundPage'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/folder/:folderId' component={FolderFilterFunction} />
        <Route path='/note/:noteId' render={(props)=> {
          return (
            <NoteFilterFunction match={props.match} history={props.history} goBack={() => props.history.push('/')}/>
          )
        }} />
        <Route component={NotFoundPage}/>
      </Switch>
    )
  }
}

export default App;