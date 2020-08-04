import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { LatestOrdersComponent } from './app/sections/latest-orders/latest-orders.component';
import { HealthSystemComponent } from './app/sections/health-system/health-system.component';
export const appRoutes: Routes =
  [{path: 'sales', component: SectionSalesComponent },
{path: 'orders', component: LatestOrdersComponent },
{path: 'health', component: HealthSystemComponent },
{path: '', redirectTo: '/sales', pathMatch: 'full'}
];
