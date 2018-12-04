import React, { Component } from 'react';
import './VendorProfile.css'
import {Modal} from 'react-materialize'
import {Button} from 'react-materialize'
import axios from "axios";

class VendorProfile extends Component {
    state = { 
        vendor:{
            name:"",
            email:"",
            phoneNumber:"",
            instagramName:"",
            vendorCategory:""
        }
     }
     componentDidMount(){
         this.setState({
             vendor:this.props.vendorInfo
         })
     }
handleChange = (event) =>{
    console.log(event.target.name)
    console.log(event.target.value)
    let newVendorInfo = this.state.vendor
    newVendorInfo[event.target.name] = event.target.value
    this.setState({
        vendor:newVendorInfo
    })
}
handleUpdate = (event) => {
    event.preventDefault();
    console.log(this.state.vendor);
    axios.put(`/api/user/${this.state.vendor._id}`, this.state.vendor)
    .then((response)=>{console.log(response)})
}

handleDelete = (event) =>{
    event.preventDefault();
    console.log(this.state.vendor)
    axios.delete(`/api/user/${this.state.vendor._id}`).then((response)=>{
        console.log(response);
        window.location = "/"
    })
}

    render() { 
        return (<div className="container">
            <div className="col s12 m7">
            <h2 className="header">My Profile</h2>
            <div className="card horizontal">
              <div className="card-image">
              <img src={this.props.vendorInfo.image}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                <p><b>Name: </b>{this.props.vendorInfo.name}</p>
            <p><b>Email: </b>{this.props.vendorInfo.email}</p>
            <p><b>Phone Number: </b>{this.props.vendorInfo.phoneNumber}</p>
            <p><b>Instagram Name: </b>{this.props.vendorInfo.instagramName}</p>
            <p><b>Vendor Category: </b>{this.props.vendorInfo.vendorCategory}</p>
                </div>
    
                <div style={{"display":"flex"}} className="card-action">
                  {/* <button>Update</button> */}

          <Modal
                header="update"
                 fixedFooter
                   trigger={<Button>Update</Button>}>
                  
                  <div>
                                    <form>
                                        <div className="name">
                                            <label htmlFor="name">Name</label>
                                            <input

                                                placeholder="Business Name"
                                                type="text"
                                                name="name"
                                                noValidate
                                                defaultValue={this.state.vendor.name}
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
                                                defaultValue={this.state.vendor.vendorCategory}
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
                                                defaultValue={this.state.vendor.phoneNumber}
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
                                                defaultValue={this.state.vendor.instagramName}
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
                                                defaultValue={this.state.vendor.image}
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
                                                defaultValue={this.state.vendor.email}
                                                onChange={this.handleChange}
                                            />

                                        </div>

                                        <div className="updateAccount">
                                            <Button onClick={this.handleUpdate} type="submit" className="modal-action modal-close">Update Account</Button>
                                            
                                        </div>

                                    </form>
                                </div>




                  </Modal>
                  <Modal
  header="Please Don't go"
  trigger={<Button>Delete</Button>}>
  <img src="https://www.columbusunderground.com/wp-content/uploads/2016/05/Sad-Dog-with-flower.jpg"></img>
  <p>Are you sure you want to leave us :(?</p>
<Button      
onClick={this.handleDelete}>Yes</Button>
</Modal>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
}
 
export default VendorProfile;       
   
        
        
            {/* <div className="container">
            <div className="wrapper">
            
       
            <img src={this.props.vendorInfo.image}/>
            <p>{this.props.vendorInfo.name}</p>
            <p>{this.props.vendorInfo.email}</p>
            <p>{this.props.vendorInfo.phoneNumber}</p>
            <p>{this.props.vendorInfo.instagramName}</p>
            
            <p>{this.props.vendorInfo.email}</p>
            <p>{this.props.vendorInfo.vendorCategory}</p>

            
            </div>
            </div> */}
