import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponentComponent } from './products-component/products-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteprodComponent } from './deleteprod/deleteprod.component';
import { AddprodComponent } from './addprod/addprod.component';
import { UpdateprodComponent } from './updateprod/updateprod.component';
import { ProductComponent } from './product/product.component';
import{RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShildProductsComponent } from './shild-products/shild-products.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponentComponent,
    DeleteprodComponent,
    AddprodComponent,
    UpdateprodComponent,
    ProductComponent,
    LoginComponent,
    ShildProductsComponent,
    SearchfilterPipe,
    RegisterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
