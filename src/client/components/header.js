import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({auth}) => {
    // this will proxy request to api server
    const authButton = auth ? (
       <a href='/api/logout'>Logout</a>
    ) :  <a href='/api/auth/google'>Login</a>;

   return (
       <nav>
           <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>SSR</Link>
                <ul className='right'>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/admin'>Admins</Link></li>
                    <li>{ authButton }</li>
                </ul> 
            </div>
       </nav>
      
   )
}

function mapStateToprops(state) {
   const { auth } = state;

   return auth;
}

export default connect(mapStateToprops)(Header);