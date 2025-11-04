import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { UserComponent } from './components/user/user';
import { UserDetailComponent } from './components/user-detail-component/user-detail-component';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'dashboard', component: Dashboard},
    { path: 'user', component: UserComponent},
    { path: 'user/:id', component: UserDetailComponent}
];
