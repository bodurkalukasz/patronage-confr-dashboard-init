import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SiteHeader from './shared-components/SiteHeader'
import Home from './views/Home'
import Users from './views/Users'
import About from './views/About'
import Contact from './views/Contact'
import GlobalStyles from './AppStyles'

export default function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <SiteHeader/>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
  )
}