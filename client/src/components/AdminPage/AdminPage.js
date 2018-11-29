import React, { Component } from 'react';
import Table from 'react-materialize';
import axios from 'axios';



class AdminPage extends Component {
    state = {
    users: [],
    }

displayUsers = () => {
    axios.get('/api/user')
    .then((response)=> {console.log(response)
        this.setState({users: response.data})
    })
}

componentDidMount(){
    this.displayUsers()
}




    render() {
        return (
            <div>
                {this.state.users.map((user, index)=>{
<td key={`user${index}`}>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="vendorCat">Vendor Category</th>
                            <th data-field="email">Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.vendorCategory}</td>
                            <td>{user.email}</td>
                        </tr>
                        </tbody>
                </Table>

</td>
                })
                
                }
                
            </div>
        );
    }
}

export default AdminPage;