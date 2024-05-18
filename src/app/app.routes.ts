import { Routes } from '@angular/router';
import { JobListComponent } from './features/pages/job-list/job-list.component';
import { HomepageComponent } from './features/pages/homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    }
];
