import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {ProductService} from '../services/products.service';
import {ProductSharedService} from '../services/product.sharedService';
import {product} from "../Models/product";
import {mediumImageHostUrl} from "../constants";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./Template_Craftsvilla.min.css',
    './productlist.component.css',
    '../styles/custom.css',
  './Best and Latest Offers on Sarees Online _ Best Deals, Discounts on Sarees at Craftsvilla_files/jquery.fancybox.css',
    './Best and Latest Offers on Sarees Online _ Best Deals, Discounts on Sarees at Craftsvilla_files/bootstrap.min.css',
  './Best and Latest Offers on Sarees Online _ Best Deals, Discounts on Sarees at Craftsvilla_files/custom.1459830600.min.css']
})
export class ProductlistComponent implements OnInit {

  productList: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts(){

    //to append host address to image urls

    this.productService.getProducts().subscribe(
      products => this.productList = products.products.map((product:product)=> {
        product.mediumImageUrl = mediumImageHostUrl + product.imgUrl;
        return product;
      }), //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }




}
