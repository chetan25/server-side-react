import Home from './components/home';
import Userlist, {loadData} from './components/users-list';

// route api - https://react-ssr-api.herokuapp.com/

// to work woth react-router-config
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: Userlist,
    loadData
  }
];