import { appRoutes } from '../route';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { HealthSystemComponent } from './sections/health-system/health-system.component';
import { LatestOrdersComponent } from './sections/latest-orders/latest-orders.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
	declarations: [AppComponent,
		NavbarComponent,
		SidebarComponent,
		DashboardComponent,
		SectionSalesComponent,
		HealthSystemComponent,
		LatestOrdersComponent,
		BarChartComponent,
		LineChartComponent,
		PieChartComponent
	],
	imports: [ BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes), ChartsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
