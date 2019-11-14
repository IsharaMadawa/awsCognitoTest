import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardService } from '../guards/auth-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    //canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'd3charts', component: D3ChartsComponent }
    ]
  }
];