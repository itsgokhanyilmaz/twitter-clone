import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

export const ROUTES = [
  {
    icon: 'home',
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    icon: 'shopping-cart',
    path: '/first',
    name: 'First Page',
    component: FirstPage,
  },
  {
    icon: 'user',
    path: '/profile',
    name: 'Profile Page',
    component: ProfilePage,
  },
  {
    icon: 'login',
    path: '/login',
    name: 'Log in',
    component: LoginPage,
  },
];
