import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    render() {
        return (
            <div>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    
    }
}

export default Users;