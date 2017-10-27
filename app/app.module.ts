import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
impoty { EditAnimalComponent } from './edit-animal.component';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  NewAnimalComponent,
                  EditAnimalComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
