import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponentComponent} from './products-component/products-component.component';
import {DeleteprodComponent} from './deleteprod/deleteprod.component';
import {AddprodComponent} from './addprod/addprod.component';
import {UpdateprodComponent} from './updateprod/updateprod.component';
import {ProductComponent} from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  {
    path: 'ListProd', component: ProductsComponentComponent
  },
  {
    path: 'delete/:id', component: DeleteprodComponent
  },
  {
    path: 'ajouter', component: AddprodComponent
  },
  {
    path: 'Modifier/:id', component: UpdateprodComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
