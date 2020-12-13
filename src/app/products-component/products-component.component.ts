import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {product} from '../model/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import{RouterModule} from '@angular/router';
import {ShildProductsComponent} from '../shild-products/shild-products.component';
@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
 // listproduct: product[];
  mes:string[] = []
  m:string;
  

  constructor(public pc: ProductServiceService) {

    
  }

  // form = this.f.group({
  //   id: ['', Validators.required],
  //   title: ['', Validators.required],
  //   price: ['', [Validators.required]],
  //   quantity: ['', [Validators.required]],
  //   image: ['', [Validators.required]]

  // });

  // get id() {
  //   return this.form.get('id');
  // }

  // get title() {
  //   return this.form.get('title');
  // }

  // get price() {
  //   return this.form.get('price');
  // }

  // get quantity() {
  //   return this.form.get('quantity');
  // }

  // get image() {
  //   return this.form.get('image');
  // }

getmessage(a:string){
console.log(a);
this.mes.push(a);
}

  ngOnInit(): void {
    this.pc.afficher();

  }

}
