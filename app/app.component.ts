import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>The Zooniverse</h1>
  </div>
  <div id="total">
    <p>Total Needed Caretakers: {{totalCaretakersNeeded}}<p>
  </div>
  <div class="container">
    <div *ngIf='!logNewAnimal'>
      <button class="btn" id="log" (click)="logButtonClicked()">Log New Animal</button>
      <animal-list [childAnimalList]="masterAnimalList" (editButtonClickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>
    <div *ngIf='logNewAnimal'>
      <new-animal (newAnimalSender)="logAnimal($event)" (logButtonClickedSender)="finishedLogging()"></new-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Gorilla', 'Bollo', 24, 'Fruit', 'Montane Forest', 3, 'Male', 'Roller Disco', 'Jazz', '2017-06-01'),
    new Animal('Snow Leopard', 'Vincent', 1, 'Meat', 'Mountain Tops', 2, 'Female', 'Quiet Mornings', 'Dogs', '2017-10-27')
  ];

  logNewAnimal = false;
  selectedAnimal = null;
  totalCaretakersNeeded: number = this.totalCaretakers();


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

  totalCaretakers() {
    let count = 0;
    for(let i = 0; i < this.masterAnimalList.length; i ++) {
      count += this.masterAnimalList[i].caretakersNeeded;
    }
    return count;
  }
}
