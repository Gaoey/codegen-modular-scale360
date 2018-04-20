import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createAction, createActionType, createReducer, createContainer, createIndex, addInReducer } from './AppAction'
import { EditorComponent } from './EditorComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.renderResult = this.renderResult.bind(this)
    this.updateInputValueActionName = this.updateInputValueActionName.bind(this)
    this.updateInputValueActionType = this.updateInputValueActionType.bind(this)
    this.updateInputValueMethod = this.updateInputValueMethod.bind(this)
    this.updateInputValueUrl = this.updateInputValueUrl.bind(this)
    this.createAction = createAction.bind(this)
    this.createActionType = createActionType.bind(this)
    this.createReducer = createReducer.bind(this)
    this.createContainer = createContainer.bind(this)
    this.createIndex = createIndex.bind(this)
    this.addInReducer = addInReducer.bind(this)
    this.state = {
      URL: '',
      actionName: '',
      actionType: '',
      method: '',
      containerName: ''
    }
  }

  renderResult() {
    const { URL, actionName, actionType, method, containerName } = this.state
    const actionString = this.createAction(URL, actionName, actionType, method)
    const actionTypeString = this.createActionType(actionType)
    const reducerString = this.createReducer(actionType, actionName)
    const createContainerString = this.createContainer(containerName, actionName)
    const createIndexString = this.createIndex(containerName)
    const addInReducerString = this.addInReducer(containerName)
    return (
      <div>
        <h3 id="index">Index.js // Input in "./index.js" </h3>
        <div>
          {EditorComponent(createIndexString)}
        </div>
        <hr />
        <h3 id="importReducer">import such thing // Input in "../feature/reducer.js and ../feature/index.js" </h3>
        <div>
          {EditorComponent(addInReducerString)}
        </div>
        <h3 id="action">Action // Input in "./xxxAction.js" </h3>
        <div>
          {EditorComponent(actionString)}
        </div>
        <hr />
        <div>
          <h3 id="actionType">Action Type // Input in "./constants/ActionTypes.js" </h3>
          {EditorComponent(actionTypeString)}
        </div>
        <hr />
        <h3 id="reducer">Reducer // Input in "./xxxReducer.js" </h3>
        <div>
          {EditorComponent(reducerString)}
        </div>
        <hr />
        <h3 id="containerBox">Container // Input in "./xxxContainer.js" </h3>
        <div>
          {EditorComponent(createContainerString)}
        </div>
        <hr />
      </div>
    )
  }

  updateInputValueUrl(evt) {
    this.setState({
      URL: evt.target.value
    })
  }

  updateInputValueActionName(evt) {
    this.setState({
      actionName: evt.target.value
    })
  }

  updateInputValueActionType(evt) {
    this.setState({
      actionType: evt.target.value.toUpperCase()
    })
  }

  updateInputValueMethod(evt) {
    this.setState({
      method: evt.target.value
    })
  }

  updateInputValueContainerName(evt) {
    this.setState({
      containerName: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Code Generator modular-chat</h1>
        </header>
        <br />
        <form id="initial data">
          <div>
            <span>Container Name</span> <span><input type="text" id="container" value={this.state.containerName} onChange={evt => this.updateInputValueContainerName(evt)} /></span>
          </div>
          <div>
            <span>Action Name</span> <span><input type="text" id="action-name" value={this.state.actionName} onChange={evt => this.updateInputValueActionName(evt)} /></span>
          </div>
          <div>
            <span>ActionType</span> <span><input type="text" id="action-type" value={this.state.actionType} onChange={evt => this.updateInputValueActionType(evt)} /></span>
          </div>
          <div>
            <span>Method</span> <span><input type="text" id="method" value={this.state.method} onChange={evt => this.updateInputValueMethod(evt)} /></span>
          </div>
          <div>
            <span>URL</span> <span><input type="text" value={this.state.URL} onChange={evt => this.updateInputValueUrl(evt)} /></span>
          </div>
        </form>
        <button>OK</button>
        <div style={style.nav}>
          <a href="#containerBox"><button style={style.button}>CONTAINER</button></a>
          <a href="#action"><button style={style.button}>ACTION</button></a>
          <a href="#reducer"><button style={style.button}>REDUCER</button></a>
          <a href="#index"><button style={style.button}>folder/index.js</button></a>
          <a href="#actionType"><button style={style.button}>buildActionType</button></a>
          <a href="#importReducer"><button style={style.button}>reducer.js</button></a>
        </div>
        <div>
          {this.renderResult()}
        </div>
        <footer className="App-header">
          <h1 className="App-title">GaoEy</h1>
          <h3>@codegen for modular-chat  20/4/2018</h3>
        </footer>
      </div >
    );
  }
}

const style = {
  button: {
    width: '200px',
    height: '30px',

    fontSize: '20px'
  },
  smallSize: {
    fontSize: '10px'
  },
  normalSize: {
    fontSize: '30px'
  },
  nav: {
    position: 'fixed',
    top: 0,
    right: 0
  }
}

export default App;
