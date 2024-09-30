import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './components/seller/seller.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/customer/navbar/navbar.component';
import { SliderComponent } from './components/customer/slider/slider.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { UsermanagementComponent } from './components/admin/usermanagement/usermanagement.component';
import { ProductmangementComponent } from './components/admin/productmangement/productmangement.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    CustomerComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    SliderComponent,
    AdmindashboardComponent,
    UsermanagementComponent,
    ProductmangementComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
