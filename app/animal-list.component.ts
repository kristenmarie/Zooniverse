import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)" class="form-control form-control-lg">
    <option value="allAnimals">All Animals</option>
    <option value="young">Young Animals (< 2 Years of Age)</option>
    <option value="mature">Mature Animals (>= 2 years of age)</option>
  </select>
  <div class="card-panel">
    <table class="striped centered responsive-table">
      <thead>
        <th class="species">Species</th>
        <th class="name">Name</th>
        <th class="age">Age</th>
        <th class="diet">Diet</th>
        <th class="location">Location</th>
        <th class="caretakers">Caretakers Needed</th>
        <th class="sex">Sex</th>
        <th class="likes">Likes</th>
        <th class="dislikes">Dislikes</th>
        <th>Edit</th>
      </thead>
      <tbody>
        <tr *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
          <td class="species">{{currentAnimal.species}}</td>
          <td class="name">{{currentAnimal.name}}</td>
          <td class="age">{{currentAnimal.age}}</td>
          <td class="diet">{{currentAnimal.diet}}</td>
          <td class="location">{{currentAnimal.zooLocation}}</td>
          <td class="caretakers">{{currentAnimal.caretakersNeeded}}</td>
          <td class="sex">{{currentAnimal.sex}}</td>
          <td class="likes">{{currentAnimal.like}}</td>
          <td class="dislikes">{{currentAnimal.dislike}}</td>
          <td><button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editButtonClickSender = new EventEmitter();

  filterByAge: string = 'allAnimals';

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.editButtonClickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
