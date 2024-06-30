import { Component, Input } from '@angular/core';
import { plantmodel } from '../bestsellers/plant.model';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent {
  @Input() plant! : plantmodel

}
