import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Nav = (props) => {
    var elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems);
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
                        <Link to={'/homePage'}><img className="logo" src="images/planoire2copy.png"/></Link>
                        {
                            props.type ? <Link to={'/'} data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link> : ""
                        }


                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {props.type == "planner" ? <li><Link to={'/PlannerBoard'}>PlannerBoard</Link></li> : ""}
                            {
                                props.type ?
                                    <li><Link to={'/homePage'}>Home</Link></li> :
                                    ""
                            }
                            {
                                props.type ? <li><Link className="dropdown-trigger" data-target="dropdown1" to={'/vendorCategory'}>Vendor Category</Link></li> : ""
                            }
                            {
                                props.type ? <li><Link to={'/vendorProfile'}>Profile</Link></li> : ""
                            }
                            {
                                props.type ? <li><Link to={'/signOut'}>Sign Out</Link></li> : ""
                            }



                        </ul>

                        <ul className="sidenav" id="mobile-demo">


                            {props.type == "planner" ? <li><Link to={'/PlannerBoard'}>PlannerBoard</Link></li> : ""}
                            {
                                props.type ?
                                    <li><Link to={'/homePage'}>Home</Link></li>

                                    :
                                    ""
                            }
                            {/* {
                                props.type ? <li><Link className="dropdown-trigger" data-target="dropdown1" to={'/vendorCategory'}>Vendor Category</Link></li> : ""
                            } */}
                            {
                                props.type ? <li><Link to={'/vendorProfile'}>Profile</Link></li> : ""
                            }



                            <li><Link to={'/Photographer'}>Photographer</Link></li>
                            <li><Link to={'/Deejay'}>Deejay</Link></li>
                            <li><Link to={'/MakeUpArtist'}>Make Up Artist</Link></li>

                            <li><Link to={'/Venue'}>Venue</Link></li>
                            <li><Link to={'/Caterer'}>Caterer</Link></li>
                            <li><Link to={'/Bartender'}>Bartender</Link></li>
                            <li><Link to={'/Decorator'}>Decorator</Link></li>
                            {
                                props.type ? <li><Link to={'/signOut'}>Sign Out</Link></li> : ""
                            }


                        </ul>

                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;

