import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  constructor(public pc : ProductServiceService,private f: FormBuilder) { }
  form = this.f.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    price: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    image: ['', [Validators.required]]

  });

  get id() {
    return this.form.get('id');
  }
  ngOnInit(): void {
  }

}
