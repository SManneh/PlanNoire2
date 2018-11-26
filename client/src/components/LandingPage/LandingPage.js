import React, { Component } from 'react';
import './LandingPage.css';
import { Modal } from 'react-materialize'
// import { Button } from 'react-materialize'


class LandingPage extends Component {
    state = {}
    render() {
        return (

            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Log In</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
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
                            <button type="submit">Log In</button>



                            <Modal
                                header='Register'
                                fixedFooter
                                trigger={<button>Create An Account</button>}>

                                <div>
                                    <form onSubmit={this.handleSubmit} noValidate>
                                        <div className="name">
                                            <label htmlFor="name">Business Name</label>
                                            <input

                                                placeholder="Business Name"
                                                type="text"
                                                name="firstName"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="userType">
                                            <label htmlFor="userType">User Type</label>
                                            <input

                                                placeholder="Choose a User Type"
                                                type="text"
                                                name="lastName"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="category">
                                            <label htmlFor="category">Catergory</label>
                                            <input

                                                placeholder="Vendor Category"
                                                type="text"
                                                name="lastName"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="phone_number">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input

                                                placeholder="Phone Number"
                                                type="text"
                                                name="lastName"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="instagram_name">
                                            <label htmlFor="instagram_name">Instagram Name</label>
                                            <input

                                                placeholder="Instagram Name"
                                                type="text"
                                                name="email"
                                                noValidate
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        <div className="image_url">
                                            <label htmlFor="image_url">Image Url</label>
                                            <input

                                                placeholder="Image Url"
                                                type="text"
                                                name="email"
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
                                            <button type="submit">Create Account</button>
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