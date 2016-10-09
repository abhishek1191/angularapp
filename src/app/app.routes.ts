/**
 * Created by Abhishek on 10/9/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductspecComponent } from './productspec/productspec.component';
import {ProductlistComponent} from './productlist/productlist.component';

// Route Configuration
export const routes: Routes = [
  {path: "",
  component: ProductlistComponent},
  { path: 'product-details', component: ProductspecComponent }
];


export const routing = RouterModule.forRoot(routes);
