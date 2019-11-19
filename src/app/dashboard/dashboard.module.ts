import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { ChartsModule } from 'ng2-charts';
import { AuthGuardService } from '../guards/auth-guard.service';

import { ButtonModule } from "up-ui-common";

@NgModule({
  declarations: [HomeComponent, D3ChartsComponent, LayoutComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ChartsModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [AuthGuardService]
})
export class DashboardModule { }