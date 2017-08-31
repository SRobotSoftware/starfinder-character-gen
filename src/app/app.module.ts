import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdSidenavModule, MdListModule, MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
