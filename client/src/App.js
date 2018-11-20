import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import VendorPage from './components/VendorPage/VendorPage'
import VendorProfile  from './components/VendorProfile/VendorProfile';
import SignOut from './components/SignOut/SignOut';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <nav>
        <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to={'/'}>Vendor Category</Link></li>
        <li><Link to={'/vendorProfile'}>Profile</Link></li>
        <li><Link to={'/signOut'}>Sign Out</Link></li>
      </ul>
      </div>
        </nav>
      </header>

      <Route exact path='/' component={VendorPage} />
      <Route exact path='/vendorProfile' component={VendorProfile} />
      <Route exact path='/signOut' component={SignOut} />
    </div>
  </BrowserRouter>

)

export default App;