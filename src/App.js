import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { store } from './store';
import { addToDo, addInput, clearAll } from './actions';
import Li from './Li';

class App extends Component {
  handleChange = (event) => {
    const text = event.target.value;
    store.dispatch(addInput(text));
  }

  handleClick = (event) => {
    const input = store.getState().input;
    store.dispatch(addToDo(input));
  }

  clearAll = () => {
    store.dispatch(clearAll());
  }

  render() {
    return (
      <div>
        <input type='text' value={store.getState().input} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.clearAll}>Clear All</button>
        <h1>To Do List</h1>
        <ul>
          {
            store.getState().list.map((element, index) => {
              return <Li key={index} text={element} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
