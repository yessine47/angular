import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {
  test;
title;
quantity;
price;
image;
idd;
  constructor(public pc: ProductServiceService, private f: FormBuilder, private activatedRoute: ActivatedRoute) {
  }


  form = this.f.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    price: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    image: ['', [Validators.required]]

  });

  get id() {
    return this.form.get('i');
  }

  ngOnInit(): void {
    this.test = this.activatedRoute.snapshot.params['id'];
    this.test = this.pc.chercherindex(this.test);
    this.idd=this.pc.listproduct[this.test].id;
    this.title=this.pc.listproduct[this.test].title;
    this.price=this.pc.listproduct[this.test].price;
    this.quantity=this.pc.listproduct[this.test].quantity;
    this.image=this.pc.listproduct[this.test].image;

  }

}
