import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'activities',
        component: ActivitiesListComponent
    }
];
