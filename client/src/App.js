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
import LandingPage from './components/LandingPage/LandingPage';


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
        
        <Route exact path='/' component={LandingPage}/>
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