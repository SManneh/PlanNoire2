import React, { Component } from 'react';
import './LandingPage.css';
import { Modal } from 'react-materialize';
import axios from 'axios';

// import { Button } from 'react-materialize'


class LandingPage extends Component {
    state = {}

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleLogin = (event) => {
        event.preventDefault();
        this.props.handleLogin(this.state)
    }
    handleRegister = (event) =>{
        event.preventDefault();
        this.props.handleRegister(this.state)
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
                            <button onClick={this.handleLogin} type="submit">Log In</button>
                           



                            <Modal
                                header='Register'
                                fixedFooter
                                trigger={<button>Create An Account</button>}>

                                <div>
                                    <form onSubmit={this.handleSubmit} noValidate>
                                        <div className="name">
                                            <label htmlFor="name">Name</label>
                                            <input

                                                placeholder="Business Name"
                                                type="text"
                                                name="name"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="userType">
                                            <label htmlFor="userType">User Type</label>
                                            <input

                                                placeholder="Choose a User Type"
                                                type="text"
                                                name="userType"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="category">
                                            <label htmlFor="category">Catergory</label>
                                            <input

                                                placeholder="Vendor Category"
                                                type="text"
                                                name="vendorCategory"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="phone_number">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input

                                                placeholder="Phone Number"
                                                type="text"
                                                name="phoneNumber"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="instagram_name">
                                            <label htmlFor="instagram_name">Instagram Name</label>
                                            <input

                                                placeholder="Instagram Name"
                                                type="text"
                                                name="instagramName"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="image_url">
                                            <label htmlFor="image_url">Image Url</label>
                                            <input

                                                placeholder="Image Url"
                                                type="text"
                                                name="image"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
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

                                        <div className="createAccount">
                                            <button onClick={this.handleRegister} type="submit" className="modal-action modal-close">Create Account</button>
                                            
                                        </div>

                                    </form>
                                </div>


                            </Modal>

                        </div>
                    </form>
                </div>

            </div>    
        );


    }
}

export default LandingPage;