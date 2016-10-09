/**
 * Created by Abhishek on 10/9/2016.
 */
import { Injectable }     from '@angular/core';
import {product} from "../Models/product";

// Import RxJs required methods


@Injectable()
export class ProductSharedService {
  // Resolve HTTP using the constructor
  constructor () {}

   product:product;

}
