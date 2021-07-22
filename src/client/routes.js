import HomePage from './pages/home';
import UserlistPage from './pages/users-list';
import App from './app';

// route api - https://react-ssr-api.herokuapp.com/

// to work woth react-router-config 

// this will have the two componets render for the two routes.
// export default [
//   {
//     path: '/',
//     component: HomePage.component,
//     exact: true
//   },
//   {
//     path: '/users',
//     component: UserlistPage.component,
//     loadData: UserlistPage.loadData
//   }
// ];

// this will have the App component render the two routes,
// so that we have the app componet render in both cases, this is nested of routes
export default [
  {
    // any routes that get matched will be passed as a prop to App component
    ...App,
    routes: [
      {
        path: '/',
        component: HomePage.component,
        exact: true
      },
      {
        path: '/users',
        component: UserlistPage.component,
        loadData: UserlistPage.loadData
      }
    ]
  }
];
