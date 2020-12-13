import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import { user } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productsUrl: string = '/api/products/';
  usersUrl: string = '/api/users/';
  listproduct: product[];
  listuser : user[];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
  }
//******************************************
  public afficher() {
    this.afficherproduits().subscribe((data) => {
        this.listproduct = data;
      }
    );
  }
//******************************************
  deleteProduct(id: number) {
    return this.http.delete(this.productsUrl + id);
  }
//******************************************
  public modifier(id, form) {
    this.modifierproduit(id, form).subscribe(
      (data) => {

        this.router.navigate(['ListProd']);
        console.log(id,form);
        
      }
    );
  }
//******************************************
  public goToAjouter() {
    this.router.navigate(['ajouter']);
  }
//******************************************
  showproduct(id) {
    this.router.navigate(['product/' + id]);}
//******************************************
  chercherindex(id) {
    for (let i = 0; i < this.listproduct.length; i++) {
      if (this.listproduct[i].id == id) {
        return i;
      }
    }
  }

//******************************************
  afficherproduits() 
    {return this.http.get<product[]>(this.productsUrl);}

//******************************************
  ajouterproduit(prod: product) 
    {return this.http.post<product>(this.productsUrl, prod);}
//******************************************
  modifierproduit(id: number, prod: product) 
    {return this.http.put<product>(this.productsUrl + id, prod);}
//******************************************
  retourlist() 
    {this.router.navigate(['ListProd']);}
//******************************************
  public supprimer(id) {
    this.deleteProduct(id).subscribe((data) => {
        this.router.navigate(['delete/' + id]);
        console.log('delete success');
        alert('delete success')
      }
    );

  }
//******************************************

  public goToModifier(id) {
    this.router.navigate(['Modifier/' + id]);
  }
//******************************************

  public ajouter(form) {
    this.ajouterproduit(form).subscribe(
      (data) => {
        this.router.navigate(['ListProd']);
       
        
      }
    );

  }
//******************************************
afficherusers() 
{return this.http.get<user[]>(this.usersUrl);}
//******************************************
public user() {
  this.afficherusers().subscribe((data) => {
      this.listuser = data;
    }
  );
}
//******************************************

public ajouteruser(form) {
  this.adduser(form).subscribe(
    (data) => {
      this.router.navigate(['']);
    }
  );
  console.log(form.name,form.password,form.email,form.fullName);
}
//******************************************
adduser(usr: any) :Observable<any>
{return this.http.post(this.usersUrl, usr);}
}
