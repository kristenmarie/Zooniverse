import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Log New Animal</h2>
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

  `
})

export class NewAnimalComponent {

}
