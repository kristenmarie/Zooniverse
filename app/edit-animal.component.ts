import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
   <h2>Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h2>
   <label>Age:</label>
   <input [(ngMogel)]="childSelectedAnimal.age" class="form-control">
   <label>Number of Caretakers Needed:</label>
   <input [(ngModel)]="childSelectedAnimal.caretakersNeeded" class="form-control">
   <label>Like:</label>
   <input [(ngModel)]="childSelectedAnimal.like" class="form-control">
   <label>Dislike:</label>
   <input [(ngModel)]="childSelectedAnimal.dislike" class="form-control">
   <button class="btn" (click)="doneButtonClicked()">Done</button>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
