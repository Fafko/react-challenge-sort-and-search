import React, {Component} from 'react';
import UserData from './UserData';

export default
class UserList extends Component{
    
    render(){

        let users = [];

        this.props.users.forEach((user) => {
            users.push(<UserData user={user} key={user.id} setActiveUser={this.props.setActiveUser} />);
        });
        
        return (
            <div className='col-sm-8 col-md-9 col-lg-10' >
                <table className='user-list table table-striped' >
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
            </div>
        );
    }
    
}