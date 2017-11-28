import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ClientComponent} from './client/client.component';
import {Route, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: '', redirectTo: '/client', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
