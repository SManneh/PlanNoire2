import React, { Component } from 'react';
import './Card.css';
import axios from 'axios';

class Card extends Component {
  state = {
    vendors: [],
    showModal: false
  }
  getVendors = (vendorType) => {
    console.log("Vendors...", vendorType)
    let url = "/api/vendors/"
    vendorType ? url = url + vendorType : url = url;
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

                  <button>Trigger Modal</button>
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