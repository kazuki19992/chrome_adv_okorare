// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import View from './views/Block'
import Top from './views/Top'

function App() {
  // const block = useParams()

  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/:block' component={View} />
      </Switch>
    </Router>
  )
}

export default App;
