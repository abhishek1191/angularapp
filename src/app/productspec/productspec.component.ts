import { Component, OnInit } from '@angular/core';
import {ProductSharedService} from "../services/product.sharedService";

@Component({
  selector: 'app-productspec',
  templateUrl: './productspec.component.html',
  styleUrls: ['./productspec.component.css',
  './Buy Yellow And Blue Georgette And Chiffon Saree online _ Craftsvilla_files/bootstrap.min.css',
  './Buy Yellow And Blue Georgette And Chiffon Saree online _ Craftsvilla_files/custom.1475388052.min.css',
  './Buy Yellow And Blue Georgette And Chiffon Saree online _ Craftsvilla_files/font-awesome.min.css']
})
export class ProductspecComponent implements OnInit {

  product;
  constructor(productSharedService:ProductSharedService) {
    let hostUrl = "http://img1.craftsvilla.com/orig";
    this.product = productSharedService.product;
    this.product.largeImageUrl = hostUrl+this.product.imgUrl;
  }

  ngOnInit() {

  }

}
