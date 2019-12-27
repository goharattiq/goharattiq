import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contact from './components/Contact';
import Work from './components/Work';
import About from './components/About';

import {Provider} from 'react-redux';
import store from './redux/store';

const App=()=> {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Route exact path='/' component={Landing}/>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/work' component={Work}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
