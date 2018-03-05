import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import Header from 'components/partials/Header';

import AssignmentsPage from 'components/pages/AssignmentsPage';
import ClassesPage from 'components/pages/ClassesPage';
import LessonsPage from 'components/pages/LessonsPage';
import LibrariesPage from 'components/pages/LibrariesPage';
import SettingsPage from 'components/pages/SettingsPage';


class App extends Component {
    render () {
        return (
            <Router>
              <div>
                <Header />
                <div>
                  <Route exact path="/" component={ClassesPage}/>
                  <Route path="/lessons" component={LessonsPage}/>
                  <Route path="/libraries" component={LibrariesPage}/>
                  <Route path="/assignments" component={AssignmentsPage}/>
                  <Route path="/settings" component={SettingsPage}/>
                </div>
              </div>    
            </Router>
        )
    }
}

// const App = () => (
// 
// )
// 
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <App2/>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }



export default App;
