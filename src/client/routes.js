import HomePage from './pages/home';
import UserlistPage from './pages/users-list';

// route api - https://react-ssr-api.herokuapp.com/

// to work woth react-router-config
export default [
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
];