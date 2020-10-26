import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    NavComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
