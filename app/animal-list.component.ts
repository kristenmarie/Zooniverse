import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
      <h3>Species: {{currentAnimal.species}}</h3>
      <p>Name: <strong>{{currentAnimal.name}}</strong></p>
      <p>Age: {{currentAnimal.age}}</p>
      <p>Diet: {{currentAnimal.diet}}</p>
      <p>Location: {{currentAnimal.zooLocation}}</p>
      <p>Needed Caretakers: {{currentAnimal.caretakersNeeded}}</p>
      <p>Sex: {{currentAnimal.sex}}</p>
      <p>Likes: {{currentAnimal.like}}</p>
      <p>Dislikes: {{currentAnimal.dislike}}</p>
      <button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editButtonClickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.editButtonClickSender.emit(animalToEdit);
  }

}
