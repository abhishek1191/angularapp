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
import {routing} from './app.routes';

import {ProductService} from './services/products.service';
import { ProductspecComponent } from './productspec/productspec.component';
import {ProductSharedService} from "./services/product.sharedService";

@NgModule({
  declarations: [
    AppComponent,
    ChocolateComponent,
    MainContainer,
    ProductlistComponent,
    ProductdetailsComponent,
    ProductspecComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [ProductService,ProductSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
