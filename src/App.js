import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MultiplyTable from './MultiplyTable.js';
import QuickMath from './QuickMath.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        screen: "main",
    };

    this.switchScreen = this.switchScreen.bind(this);
  }

  switchScreen(screen){
    this.setState({
        screen: screen,
    });
  }

  render() {
    var outputRender = (<div className="quick-math row">
        <button className="quick-btn btn btn-success"
                onClick={() => this.switchScreen("quick-math")}>
            Quick Math
        </button>

        <button className="quick-btn btn btn-info"
                onClick={() => this.switchScreen("multiply-table")}>
            Multiply Table
        </button>
    </div>);
    var title = "React App"


    if(this.state.screen === "quick-math"){
        outputRender = (<div>
            <QuickMath />
            <button className="quick-btn btn btn-warning"
                    onClick={() => this.switchScreen("main")}>
                Home
            </button>
        </div>);
        title = "Quick Math";
    }
    else if(this.state.screen === "multiply-table"){
        outputRender = (<div>
            <MultiplyTable />
            <button className="quick-btn btn btn-warning"
                    onClick={() => this.switchScreen("main")}>
                Home
            </button>
        </div>);
        title = "Multiply Table";
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        {outputRender}
      </div>
    );
  }
}

export default App;
