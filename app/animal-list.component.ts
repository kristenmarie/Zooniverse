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
  <table class="striped centered responsive-table">
    <thead>
      <th class="species">Species</th>
      <th class="name">Name</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers Needed</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
      <th>Edit</th>
    </thead>
    <tbody>
      <tr *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
        <td class="species">{{currentAnimal.species}}</td>
        <td class="name">{{currentAnimal.name}}</td>
        <td>{{currentAnimal.age}}</td>
        <td>{{currentAnimal.diet}}</td>
        <td>{{currentAnimal.zooLocation}}</td>
        <td>{{currentAnimal.caretakersNeeded}}</td>
        <td>{{currentAnimal.sex}}</td>
        <td>{{currentAnimal.like}}</td>
        <td>{{currentAnimal.dislike}}</td>
        <td><button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></td>
      </tr>
    </tbody>
  </table>
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
