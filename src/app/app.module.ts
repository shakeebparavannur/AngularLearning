import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule } from '@angular/material/table'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ // Every angular component that exist in the angular module must be added to the decalaration array
    AppComponent, ProductsComponent
  ],
  imports: [ // Defines other Angular modules that contain the functionality the Angular module needs.
    BrowserModule,HttpClientModule, BrowserAnimationsModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
