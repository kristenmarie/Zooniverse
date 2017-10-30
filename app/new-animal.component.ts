import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="card-panel">
    <h2>Log New Animal</h2>
    <div class="row">
      <div class="col s6">
        <div class="form-group">
          <label>Animal Species:</label>
          <input #species class="form-control">
        </div>
        <div class="form-group">
          <label>Name:</label>
          <input #name class="form-control">
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input #age class="form-control">
        </div>
        <div class="form-group">
          <label>Diet:</label>
          <input #diet class="form-control">
        </div>
        <div class="form-group">
        <label>Location:</label>
        <input #location class="form-control">
        </div>
      </div>
      <div class="col s6">
        <div class="form-group">
          <label>Number of Needed Caretakers:</label>
          <input #caretakersNeeded class="form-control">
        </div>
        <div class="form-group">
          <label>Sex:</label>
          <input #sex class="form-control">
        </div>
        <div class="form-group">
          <label>Like:</label>
          <input #like class="form-control">
        </div>
        <div class="form-group">
          <label>Dislike:</label>
          <input #dislike class="form-control">
        </div>
        <div class="form-group">
        <label>Todays Date:</label>
        <input #date class="form-control" placeholder="YYYY-MM-DD">
        </div>
      </div>
    </div>
    <button class="btn" (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakersNeeded.value, sex.value, like.value, dislike.value, date.value); species.value=''; name.value=''; diet.value=''; location.value=''; caretakersNeeded.value=''; sex.value=''; like.value=''; dislike.value=''; logButtonClicked();">Log Animal</button>
  </div>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() logButtonClickedSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakersNeeded: string, sex: string, like: string, dislike: string, date: string) {
    var newAnimalToLog: Animal = new Animal(species, name, age, diet, location, parseInt(caretakersNeeded), sex, like, dislike, date);
    this.newAnimalSender.emit(newAnimalToLog);
  }

  logButtonClicked() {
    this.logButtonClickedSender.emit();
  }
}
