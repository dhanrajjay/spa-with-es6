import HomeComponent      from '../components/home.js';
import AboutComponent     from '../components/about.js';
import LoginComponent     from '../components/login.js';
import DashboardComponent from '../components/dashboard.js';

const Routes = {
    ''              : HomeComponent, 
    '/about'        : AboutComponent,
    '/login'        : LoginComponent,
    '/dashboard'    : DashboardComponent
};

export default Routes;