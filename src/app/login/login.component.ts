import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../model/user';
import { ProductServiceService } from '../shared/product-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public pc: ProductServiceService,  private activatedRoute: ActivatedRoute, private router: Router) { }
 
x:boolean;
  ngOnInit(): void {
    this.pc.user();
    this.x=false;
  }
log(u:string,p:string)
{let i:number;
 let x:boolean =false;
  console.log(u,p);
for(i=0;i<this.pc.listuser.length;i++)
  {if((this.pc.listuser[i].name==u)&&(this.pc.listuser[i].password==p))
   {
   this.router.navigate(['ListProd' ]);
   alert("wellcome "+u)
   x=true;
   }
  }
  if (x==false){alert("wrong username or password")}
}


}