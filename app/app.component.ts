import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="page-header">
      <h1>The Zooniverse</h1>
    </div>
    <div class="row">
      <div class="col">
        <animal-list [childAnimalList]="masterAnimalList"></animal-list>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Gorilla', 'Bollo', 24, 'Fruit', 'Montane Forest', 3, 'Male', 'Roller Disco', 'Jazz'),
    new Animal('Snow Leopard', 'Vincent', 1, 'Meat', 'Mountain Tops', 2, 'Female', 'Quiet Mornings', 'Dogs')
  ];
}
