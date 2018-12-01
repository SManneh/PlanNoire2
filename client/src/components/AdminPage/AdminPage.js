import React, { Component } from 'react';
import Table from 'react-materialize';
import axios from 'axios';



class AdminPage extends Component {
    state = {
        users: []
    }

    displayUsers = () => {
        axios.get('/api/admin/approved')
        .then((response)=> {console.log(response)
            this.setState({users: response.data})
        })
    }

handleApprove = (event) =>{
    event.preventDefault();
    let id = event.target.value;
    console.log(id);
    axios.put(`/api/user/${id}`,{isApproved:true}).then((response)=>{
        this.displayUsers()
    })
}

handleDeny = (event) => {
    event.preventDefault();
    let id = event.target.value;
    console.log(id);
    axios.delete(`/api/user/${id}`).then((response)=>{
        this.displayUsers()
    })
}

    componentDidMount(){
        this.displayUsers()
    }


    render() {
        return (
            <div>
                {/* <Table> */}
                <table>
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="vendorCat">Vendor Category</th>
                            <th data-field="email">Email</th>
                            <th data-field="phone">Phone Number</th>
                            <th data-field="igName">Instagram Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.users.map(user => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.vendorCategory}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.instagramName}</td>
                                    <button value={user._id} onClick={this.handleApprove}>Approve</button>
                                    <button value={user._id} onClick={this.handleDeny}>Deny</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* </Table> */}
            </div>
        );
    }
}

export default AdminPage;