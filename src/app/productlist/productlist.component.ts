import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {ProductService} from '../services/products.service';

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
    let hostUrl = "http://img1.craftsvilla.com/thumb/216x216";

    //to append host address to image urls

    this.productService.getProducts().subscribe(
      products => this.productList = products.products.map((product)=> {
        product.imgUrl = hostUrl + product.imgUrl;
        return product;
      }), //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  // productList = [
  //     {
  //       "isInStock":1,
  //       "regularPrice":99999998,
  //       "discountPercentage":0,
  //       "discountedPrice":99999998,
  //       "vendorDetails":{
  //         "vendorName":"Designersareez"
  //       },
  //       "productName":"Designersareez Women\\'s Cotton Salwar Suit Dress Material",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/V/CV-2208-MDESI63020074730--designersareez-1472467238-Craftsvilla_1.jpg",
  //       "productId":"5190234"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":1999864,
  //       "discountPercentage":0,
  //       "discountedPrice":1999864,
  //       "vendorDetails":{
  //         "vendorName":"Eshop99"
  //       },
  //       "productName":"Carrel Imported Ethnic Wear Brocade Pattern Colour Black Gold Regular Fit L Women Blouse",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/V/CV-24229-MESHO60541230140--eshop99-1469864122-Craftsvilla_1.jpg",
  //       "productId":"4952289"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":1499,
  //       "discountPercentage":0,
  //       "discountedPrice":699499,
  //       "vendorDetails":{
  //         "vendorName":"Poshak Creation"
  //       },
  //       "productName":"Poshak Creation Designer Red Georgette Kurti",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/V/CV-22263-MPOSH82484470630--Poshak_Creation-1473654615-Craftsvilla_1.jpg",
  //       "productId":"5245973"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":1599,
  //       "discountPercentage":0,
  //       "discountedPrice":599399,
  //       "vendorDetails":{
  //         "vendorName":"Poshak Creation"
  //       },
  //       "productName":"Poshak Creation Designer Georgette Kurti",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/V/CV-22263-MPOSH38176374630--Poshak_Creation-1472901847-Craftsvilla_1.jpg",
  //       "productId":"5232977"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":400000,
  //       "discountPercentage":0,
  //       "discountedPrice":400000,
  //       "vendorDetails":{
  //         "vendorName":"Himalaya Art Gallery"
  //       },
  //       "productName":"Krishna With Devoties Oil Painting - Himalay Art Gallery",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/M/M/MMUHIMALA000004_1.jpg",
  //       "productId":"16432"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":350000,
  //       "discountPercentage":0,
  //       "discountedPrice":350000,
  //       "vendorDetails":{
  //         "vendorName":"Meeta's Gallery"
  //       },
  //       "productName":"Ram Darbaar Tanjore Painting",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/V/CV-MMEET21489842930--Meeta_s_Gallery-Craftsvilla_1.jpg",
  //       "productId":"4432052"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":267000,
  //       "discountPercentage":0,
  //       "discountedPrice":267000,
  //       "vendorDetails":{
  //         "vendorName":"Divine Art Gallery"
  //       },
  //       "productName":"Krishna In Water Painting",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/a/Canvas-Divine-Art-Collection-MDEDIVIAC000008_1.jpg",
  //       "productId":"69205"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":267000,
  //       "discountPercentage":0,
  //       "discountedPrice":267000,
  //       "vendorDetails":{
  //         "vendorName":"Divine Art Gallery"
  //       },
  //       "productName":"Krishna With Flute Painting",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/a/Canvas-Divine-Art-Collection-MDEDIVIAC000005_1.jpg",
  //       "productId":"69202"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":267000,
  //       "discountPercentage":0,
  //       "discountedPrice":267000,
  //       "vendorDetails":{
  //         "vendorName":"Divine Art Gallery"
  //       },
  //       "productName":"Krishna With Sky Painting",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/a/Canvas-Divine-Art-Collection-MDEDIVIAC000010_1.jpg",
  //       "productId":"69207"
  //     },
  //     {
  //       "isInStock":1,
  //       "regularPrice":267000,
  //       "discountPercentage":0,
  //       "discountedPrice":267000,
  //       "vendorDetails":{
  //         "vendorName":"Divine Art Gallery"
  //       },
  //       "productName":"Krishna With Flute \u0026 Peacock Painting",
  //       "imgUrl":"http://img1.craftsvilla.com/thumb/216x216/C/a/Canvas-Divine-Art-Collection-MDEDIVIAC000004_1.jpg",
  //       "productId":"69201"
  //     }
  //   ];


}
