import React, { Component } from 'react';
import './Card.css';
import axios from 'axios';
import {Modal} from 'react-materialize'
import {Button} from 'react-materialize'

class Card extends Component {
  state = {
    vendors: [],
    showModal: false
  }
  getVendors = (vendorType) => {
    console.log("Vendors...", vendorType)
    let url = "/api/user/"
    vendorType ? url = "/api/vendors/" + vendorType : url = url;
    console.log(url)
    axios.get(url).then((response) => {
      console.log(response)
      this.setState({ vendors: response.data })
    })
  }
  componentDidMount() {
    this.getVendors(this.props.vendorType);
  }
  render() {
    return (<div>
      <div className="row">
        {this.state.vendors.map((vendor, index) => {
          return (
            <div key={`vendor${index}`} className="col s12 m6 l3">
              <div className="card medium">
                <div className="card-image">
                  <img src={vendor.image} />
                </div>
                <div className="card-content">
                  <span className="card-title">{vendor.name}</span>
                  <p className="vendor-cat">{vendor.vendorCategory}</p>
                </div>
                <div className="card-action">

              <Modal
                header={vendor.name}
                 fixedFooter
                   trigger={<Button>Booking info</Button>}>
                   <p><b>Phone Number: </b>{vendor.phoneNumber}</p>
                   <p><b>Email: </b>{vendor.email}</p>
                   <p><b>Instagram Name: </b>{vendor.instagramName}</p>
                  </Modal>
                  
                </div>
              </div>
            </div>
          )
        })
        }
      </div>



    </div>);
  }
}

export default Card;