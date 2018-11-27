import React, { Component } from 'react';


class VendorProfile extends Component {
    state = {  }
    render() { 
        return (<div>
            <div className="container">
            <div className="wrapper">
       
            <p>{this.props.vendorInfo.name}</p>
            <p>{this.props.vendorInfo.email}</p>
            <p>{this.props.vendorInfo.phoneNumber}</p>
            <p>{this.props.vendorInfo.instagramName}</p>
            <p>{this.props.vendorInfo.image}</p>
            <p>{this.props.vendorInfo.email}</p>
            <p>{this.props.vendorInfo.vendorCategory}</p>
            </div>
            </div>
        </div> );
    }
}
 
export default VendorProfile;