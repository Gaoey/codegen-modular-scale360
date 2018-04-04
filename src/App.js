import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createAction } from './AppAction'

class App extends Component {
  constructor(props){
    super(props)
    this.renderResult = this.renderResult.bind(this)
    this.updateInputValueActionName = this.updateInputValueActionName.bind(this)
    this.updateInputValueActionType = this.updateInputValueActionType.bind(this)
    this.updateInputValueMethod = this.updateInputValueMethod.bind(this)
    this.updateInputValueUrl= this.updateInputValueUrl.bind(this)
    this.createAction = createAction.bind(this)
    this.state = {
      URL: '',
      actionName: '',
      actionType: '',
      method: ''
    }
  }

  renderResult(){
    const {URL, actionName, actionType, method} =this.state
    return (<div>
    <h3>Action </h3>
    <div>
      {this.createAction(URL, actionName, actionType, method)}
    </div>
    <p>-----------------------------------------------</p>
    <div>
    {this.state.actionName}
    </div>
    <p>-----------------------------------------------</p>
    <div>
    {this.state.actionType}
    </div>
    <p>-----------------------------------------------</p>
    <div>
      {this.state.method}
    </div>
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
      actionType: evt.target.value
    })
  }
  
  updateInputValueMethod(evt) {
    this.setState({
      method: evt.target.value
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Code Generator Modular</h1>
        </header>
        <h1>Create ACTION</h1>
        <form id="initial data">
        <div>
          <span>URL</span> <span><input type="text" value={this.state.URL} onChange={evt => this.updateInputValueUrl(evt)}/></span>
        </div>
        <div>
          <span>Action Name</span> <span><input type="text" id="action-name" value={this.state.actionName} onChange={evt => this.updateInputValueActionName(evt)}/></span>
        </div>
        <div>
          <span>ActionType</span> <span><input type="text" id="action-type" value={this.state.actionType} onChange={evt => this.updateInputValueActionType(evt)}/></span>
        </div>
        <div>
          <span>Method</span> <span><input type="text" id="method" value={this.state.method} onChange={evt => this.updateInputValueMethod(evt)}/></span>
        </div>
        </form>
        <button>OK</button>
        <div>
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

export default App;
