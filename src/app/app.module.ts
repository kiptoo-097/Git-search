import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    NavComponent,
    HighlightDirective,
    DateCountPipe,
    AboutComponent,
    FormComponent,
  
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
