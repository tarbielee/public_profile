// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/about';
import Project from './components/project';
import Portfolio from './components/portfolio';
import Contacts from './components/contacts';

function App() {
  return{
    <div className='App'>
    <Header />
    <hr />
    <Navbar />
    <br />
    <Banner />
    <br />
    <About />
    <br />
    <Project />
    <br />
    <Portfolio />
    <br />
    <Contacts />
    <br />
  }
}
