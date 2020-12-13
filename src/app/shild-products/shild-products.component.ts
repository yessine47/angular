import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../model/product';
import { ProductServiceService } from '../shared/product-service.service';

@Component({
  selector: 'app-shild-products',
  templateUrl: './shild-products.component.html',
  styleUrls: ['./shild-products.component.css']
})
export class ShildProductsComponent implements OnInit {
@Input() a:product;
@Output() message = new EventEmitter<string>();


  constructor(public pc: ProductServiceService) { 
 
 
  }
  callType(x :number){
    let c = this.a.price*(100-x)/100;
    let m = ("L'item avec l'id :" +this.a.id+ " est maintenant à "+ c + " dt seulement !!!");
    this.message.emit(m);
  }

  ngOnInit(): void {

    
    
  }

}
