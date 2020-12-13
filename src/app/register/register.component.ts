import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { user } from '../model/user';
import { ProductServiceService } from '../shared/product-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public pc : ProductServiceService,private f: FormBuilder) { }
  form = this.f.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required]],
    fullName: ['', [Validators.required]]

  });

  get name() {
    return this.form.get('name');
  }
  ngOnInit(): void {
  }
onclick(x:user,pwd:string){
  if(this.form.invalid){alert("please fill up the form");
  }
  else if(x.password!=pwd){alert("please double-check your password")}
 else {this.pc.ajouteruser(this.form.value)}
  console.log(this.form.value);
  
}
}
