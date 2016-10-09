import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import {MainContainer} from './containers/main.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {JsonpModule} from '@angular/http';

import {ProductService} from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ChocolateComponent,
    MainContainer,
    ProductlistComponent,
    ProductdetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
