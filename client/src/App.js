import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import VendorPage from './components/VendorPage/VendorPage'
import VendorProfile  from './components/VendorProfile/VendorProfile';
import HomePage from './components/HomePage/HomePage';
import SignOut from './components/SignOut/SignOut';
import 'materialize-css/dist/css/materialize.min.css' 
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import Photographer from './components/Photographer/Photographer';
import LandingPage from './components/LandingPage/LandingPage';
import Deejay from './components/Deejay/Deejay';
import MakeUpArtist from './components/MakeUpArtist/MakeUpArtist';
import Venue from './components/Venue/Venue';
import Caterer from './components/Caterer/Caterer';
import Decorator from './components/Decorator/Decorator';
import PlannerBoard from './components/PlannerBoard/Plannerboard';
import Nav from './components/Nav/Nav';
import axios from "axios";
import history from './history';
class App extends Component {
  state = {  
    vendorInfo:{}
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems);
    var elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems);
  }

  handleLogin = (user) =>{
    console.log("test")
    axios.post('/api/login', user)
    .then((response)=>{
      this.setState({vendorInfo:response.data})
      history.push({
        pathname: '/vendorProfile',
        state: {
          vendorInfo:response.data
        }
      })
    })
}
  render() { 
    return ( 

      <Router history={history}>
      <div>
      <Nav type={this.state.vendorInfo.userType}/>
        <Route exact path='/' component={()=>(<LandingPage handleLogin={this.handleLogin}/>)}/>
        <Route exact path='/PlannerBoard' component={PlannerBoard}/>
        <Route exact path='/homePage' component={HomePage} />
        <Route exact path='/vendorCategory' component={VendorPage} />
        <Route exact path='/vendorProfile' component={() =>(<VendorProfile vendorInfo={this.state.vendorInfo}/>)} />
        <Route exact path='/signOut' component={SignOut} />
        <Route exact path='/Photographer' component={()=>(<Photographer vendorType="Photographers"/>)}/>
        <Route exact path='/Deejay' component={()=>(<Deejay vendorType="Deejays"/>)}/>
        <Route exact path='/Deejay' component={()=>(<Deejay vendorType="Deejays"/>)}/>
        <Route exact path='/MakeUpArtist' component={()=>(<MakeUpArtist vendorType="Make Up Artists"/>)}/>
        <Route exact path='/Venue' component={()=>(<Venue vendorType="Venues"/>)}/>
        <Route exact path='/Caterer'component={()=>(<Caterer vendorType="Caterers"/>)}/>
        <Route exact path='/Decorator'component={()=>(<Decorator vendorType="Decorators"/>)}/>

      </div>
    </Router>


     );
  }
}
 
export default App ;



// const App = () => (


// )

// export default App;