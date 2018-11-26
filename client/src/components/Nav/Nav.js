import React from 'react';
import {Link} from 'react-router-dom';


const Nav = (props) => {
    return ( 
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
          <li><Link to={'/PlannerBoard'}>PlannerBoard</Link></li>
          <li><Link to={'/homePage'}>Home</Link></li>
          <li><Link className="dropdown-trigger" data-target="dropdown1" to={'/vendorCategory'}>Vendor Category</Link></li>
          <li><Link to={'/vendorProfile'}>Profile</Link></li>
          <li><Link to={'/signOut'}>Sign Out</Link></li>
        </ul>
        </div>
          </nav>
        </header>
        </div>
     );
}
 
export default Nav;

