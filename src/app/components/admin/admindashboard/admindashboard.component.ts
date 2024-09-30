import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  totalUsers = 200;
  totalProducts = 150;
  totalOrders = 120;
  totalRevenue = 25000;

}
