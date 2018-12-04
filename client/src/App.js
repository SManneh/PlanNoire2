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
import AdminPage from './components/AdminPage/AdminPage';
import Nav from './components/Nav/Nav';
import axios from "axios";
import history from './history';
import AdminLogin from './components/AdminLogin/AdminLogin';

class App extends Component {
  state = {  
    userInfo:{},
   
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
      console.log(response, "requglar user --------")
      this.setState({userInfo:response.data})
      console.log("Hellooooo")
      history.push({
        pathname: '/vendorProfile',
        state: {
          userInfo:response.data
        }
      })
    })
}
handleRegister = (user) =>{
    axios.post('/api/user', user)
    .then((response)=>{
      console.log(response.data, "regular user");
      this.setState({userInfo:response.data})
      console.log("Hellooooo")
      // history.push({
      //   pathname: '/vendorProfile',
      //   state: {
      //     vendorInfo:response.data
      //   }
      // })
    window.location='/'
    })
}

handleAdminLogin = (admin) => {
  axios.post('/api/admin/login', admin)
  .then((response)=>{
    console.log(response.data[0], " This is our response");
     this.setState({userInfo:response.data[0]})
     history.push({
       pathname:'/AdminPage',
       state:{
        userInfo:response.data
       }

       })
     })
  }

  handleSignOut = (event) => {
    console.log("Sign Out")
    this.setState({
      userInfo:{},
   
    })
    history.push({
      pathname:'/'
    })
  }

  render() { 
    return ( 

      <Router history={history}>
      <div>
      <Nav type={this.state.userInfo.userType}/>
        <Route exact path='/' component={()=>(<LandingPage handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>)}/>
        <Route exact path='/AdminLogin' component={()=>(<AdminLogin handleAdminLogin={this.handleAdminLogin}/>)}/>
        <Route exact path='/AdminPage' component={AdminPage}/>
        <Route exact path='/homePage' component={HomePage} />
        <Route exact path='/vendorCategory' component={VendorPage} />
        <Route exact path="/signOut" component ={()=>(<SignOut handleSignOut={this.handleSignOut}/>)}/>
        <Route exact path='/vendorProfile' component={() =>(<VendorProfile vendorInfo={this.state.userInfo}/>)} />
        <Route exact path='/Photographer' component={()=>(<Photographer vendorType="Photographers"/>)}/>
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