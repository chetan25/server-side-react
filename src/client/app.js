import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './actions';

// any routes that got matched will be passed as a prop to App component
const App = ({route}) => {
    return <div>
        <Header />
        {renderRoutes(route.routes)}
    </div>
}


export default {
    component: App,
    loadData: ({dispatch}) => {
       return  dispatch(fetchCurrentUser());
    }
};