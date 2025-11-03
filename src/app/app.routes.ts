import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { UserComponent } from './components/user/user';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'dashboard', component: Dashboard},
    { path: 'user', component: UserComponent}
];
