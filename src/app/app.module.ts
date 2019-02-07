import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonalDetailsComponent } from './personal-details.component';
import { GenderComponent } from './gender.component';
import { PassengerListComponent } from './passenger-list.component';
import { ContactDetailsComponent } from './contact-details.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    GenderComponent,
    PassengerListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
