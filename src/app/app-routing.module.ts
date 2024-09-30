import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/dashboard', component: AdmindashboardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
