import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage';

function App() {
  return (
   
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    
  )
}

export default App
