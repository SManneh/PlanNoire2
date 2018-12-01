import React, { Component } from 'react';
import './AdminLogin.css';

import axios from 'axios';

// import { Button } from 'react-materialize'


class AdminLogin extends Component {
    state = {
        email:'',
        password:""
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleAdminLogin = (event) => {
        event.preventDefault()
        this.props.handleAdminLogin(this.state)
    }


    render() {
        return (

            <div className="wrapper wrapper-home">
                <div className="form-wrapper">
                    <img src="images/planoire.png"/>
                    <form>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input

                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input

                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="logIn">
                            <button onClick={this.handleAdminLogin} type="submit">Log In</button>
                           
                        </div>
                    </form>
                </div>

            </div>    
        );


    }
}

export default AdminLogin;