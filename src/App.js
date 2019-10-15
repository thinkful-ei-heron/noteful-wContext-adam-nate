import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import STORE from './dummy-store';
import Main from './Main'
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
        {/* <Route path='/folder/:folderId' component={Folder} /> */}
      </Switch>
    )
  }
}

export default App;