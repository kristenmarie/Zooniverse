import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="page-header">
    <h1>The Zooniverse</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <div *ngIf='!logNewAnimal'>
          <button class="btn" id="log" (click)="logButtonClicked()">Log New Animal</button>
          <animal-list [childAnimalList]="masterAnimalList" (editButtonClickSender)="editAnimal($event)"></animal-list>
          <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        </div>
        <div *ngIf='logNewAnimal'>
          <new-animal (newAnimalSender)="logAnimal($event)" (logButtonClickedSender)="finishedLogging()"></new-animal>
        </div>
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

  logNewAnimal = false;
  selectedAnimal = null;

  logButtonClicked() {
    this.logNewAnimal = true;
  }

  logAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  finishedLogging() {
    this.logNewAnimal = false;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
