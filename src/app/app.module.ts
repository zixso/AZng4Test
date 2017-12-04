import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClientComponent} from './client/client.component';
import {Route, RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {JuriNameValidator} from "./client/validator/juriName.validator";

const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: '', redirectTo: '/client', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    JuriNameValidator

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
