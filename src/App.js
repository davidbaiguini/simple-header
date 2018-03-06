import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './App.css';
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
                  <Route exact path="/lessons" component={LessonsPage}/>
                  <Route exact path="/libraries" component={LibrariesPage}/>
                  <Route exact path="/assignments" component={AssignmentsPage}/>
                  <Route exact path="/settings" component={SettingsPage}/>
                </div>
              </div>
            </Router>
        )
    }
}

export default App;
