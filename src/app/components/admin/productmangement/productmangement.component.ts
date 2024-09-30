import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-productmangement',
  templateUrl: './productmangement.component.html',
  styleUrl: './productmangement.component.css'
})
export class ProductmangementComponent {
  productName: string = '';
  productPrice: number = 0;
  productCategory: string = 'indoor';
  productDescription: string = '';

  saveProduct() {
    // Logic to save product
    console.log('Saving product', {
      name: this.productName,
      price: this.productPrice,
      category: this.productCategory,
      description: this.productDescription,
    });
  }

}
