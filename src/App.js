import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      fullname:'Maksudur Rahman'
    };
  }
  
  
  render(){

  return (
    <div className="App">
      <header className="App-header">
      <p></p>
        <img src={logo} className="App-logo" alt="logo" />
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React
        </a>

      <h1> Hello {this.state.fullname}</h1>
      <button> Change Name </button>



      </header>
      
    
    </div>
  );

  }
}

export default App;
