import React, { Component } from 'react';

class SignOut extends Component {
    state = {  }
    componentDidMount(){
        this.props.handleSignOut();
    }
    render() { 
        return (<div>
            sign out
        </div> );
    }
}
 
export default SignOut;