import React, { Component } from 'react';
import { fetchUsers } from '../actions'
import { connect } from 'react-redux';

class Userlist extends Component {
    componentDidMount() {
       // fetch users
       this.props.fetchUsers();
    }

    renderUsers() {
      return this.props.users.map(user => {
          return <li key={user.id}>{user.name}</li>
      })
    }

    render() {
        return (
            <div>
                Here is big list of Users
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToprops(state) {
    return {
        users: state.users
    }
}

function loadData(store) {
   return store.dispatch(fetchUsers());
}

export { loadData };
export default connect(mapStateToprops, { fetchUsers })(Userlist);
