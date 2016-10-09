import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css',
    './Best and Latest Offers on Sarees Online _ Best Deals, Discounts on Sarees at Craftsvilla_files/custom.1459830600.min.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input() product ;
}
