import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import VendorPage from './components/VendorPage/VendorPage'
import VendorProfile  from './components/VendorProfile/VendorProfile';
import HomePage from './components/HomePage/HomePage';
import SignOut from './components/SignOut/SignOut';
import 'materialize-css/dist/css/materialize.min.css' 
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import Photographer from './components/Photographer/Photographer';


class App extends Component {
  state = {  }

  componentDidMount(){
    var elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems);
  }

  render() { 
    return ( 
      <BrowserRouter>
      <div>
        <header>
    <ul id="dropdown1" className="dropdown-content">
        <li><Link to={'/Photographer'}>Photographer</Link></li>
        <li><Link to={'/Deejay'}>Deejay</Link></li>
        <li><Link to={'/MakeUpArtist'}>Make Up Artist</Link></li>
        <li><Link to={'/Venue'}>Venue</Link></li>
        <li><Link to={'/Caterer'}>Caterer</Link></li>
        <li><Link to={'/Bartender'}>Bartender</Link></li>
        <li><Link to={'/Decorator'}>Decorator</Link></li>
  </ul>
          <nav>
          <div className="nav-wrapper">
          <Link to={'/homePage'}><img className="logo" src="images/planoire.png"/></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to={'/homePage'}>Home</Link></li>
          <li><Link className="dropdown-trigger" data-target="dropdown1" to={'/vendorCategory'}>Vendor Category</Link></li>
          <li><Link to={'/vendorProfile'}>Profile</Link></li>
          <li><Link to={'/signOut'}>Sign Out</Link></li>
        </ul>
        </div>
          </nav>
        </header>
        
        <Route exact path='/homePage' component={HomePage} />
        <Route exact path='/vendorCategory' component={VendorPage} />
        <Route exact path='/vendorProfile' component={VendorProfile} />
        <Route exact path='/signOut' component={SignOut} />
        <Route exact path='/Photographer' component={()=>(<Photographer vendorType="Photographers"/>)}/>
        
      </div>
    </BrowserRouter>

     );
  }
}
 
export default App ;



// const App = () => (


// )

// export default App;