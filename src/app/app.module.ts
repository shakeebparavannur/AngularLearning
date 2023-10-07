import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ // Every angular component that exist in the angular module must be added to the decalaration array
    AppComponent, ProductsComponent
  ],
  imports: [ // Defines other Angular modules that contain the functionality the Angular module needs.
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
