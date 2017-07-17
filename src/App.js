import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import Message from './components/Message'

class App extends Component {
  
  render() {
    return (
      <div>
        <Toolbar/>
        <MessageList />
      </div>
    );
  }
}

export default App;
