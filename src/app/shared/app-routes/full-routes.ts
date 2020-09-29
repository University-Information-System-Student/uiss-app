import { Routes, Route } from '@angular/router';

export const FULL_ROUTES: Route[] = [
    {
        path: 'dashboard',
        loadChildren: (() => import('../../dashboard/dashboard/dashboard.module').then(m => m.DashboardModule))

    }
];
