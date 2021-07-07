import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';

// route api - https://react-ssr-api.herokuapp.com/

export default () => {
    return (
        <div>
          <Route exact path='/' component={Home} />
        </div>
    );
}