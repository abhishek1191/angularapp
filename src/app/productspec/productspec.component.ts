import { Component, OnInit } from '@angular/core';
import {ProductSharedService} from "../services/product.sharedService";
import {product} from "../Models/product";
import {largeImageHostUrl} from "../constants";

@Component({
  selector: 'app-productspec',
  templateUrl: './productspec.component.html',
  styleUrls: ['./productspec.component.css',
  './Buy Yellow And Blue Georgette And Chiffon Saree online _ Craftsvilla_files/bootstrap.min.css',
  './Buy Yellow And Blue Georgette And Chiffon Saree online _ Craftsvilla_files/custom.1475388052.min.css',
  './Buy Yellow And Blue Georgette And Chiffon Saree online _ Craftsvilla_files/font-awesome.min.css']
})
export class ProductspecComponent implements OnInit {

  product:product;
  constructor(productSharedService:ProductSharedService) {

    this.product = productSharedService.product;
    this.product.largeImageUrl = largeImageHostUrl+this.product.imgUrl;
  }

  ngOnInit() {

  }

}
