import { Component } from '@angular/core';
import { PlantComponent } from "../plant/plant.component";
import { plantmodel } from './plant.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bestsellers',
    standalone: true,
    templateUrl: './bestsellers.component.html',
    styleUrl: './bestsellers.component.css',
    imports: [PlantComponent,CommonModule]
})
export class BestsellersComponent {
    plants! : plantmodel[]

    constructor(){
        this.plants = [
            {
                id : 1,
                name : 'plant1',
                desc : 'indoor plant',
                inStock : true,
                price : 100
            },
            {
                id : 2,
                name : 'plant2',
                desc : 'indoor plant',
                inStock : true,
                price : 200
            },
            {
                id : 3,
                name : 'plant3',
                desc : 'indoor plant',
                inStock : true,
                price : 300
            }
        ]
    }
}
