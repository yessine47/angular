import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  i;
  title;
  quantity;
  price;
  image;

  constructor(public pc: ProductServiceService, private activatedRoute: ActivatedRoute) {
  }

  index;

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params['id'];
    this.i = this.pc.chercherindex(this.index);
    this.title=this.pc.listproduct[this.i].title;
    this.price=this.pc.listproduct[this.i].price;
    this.quantity=this.pc.listproduct[this.i].quantity;
    this.image=this.pc.listproduct[this.i].image;
  }

}
