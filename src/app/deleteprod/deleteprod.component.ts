import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deleteprod',
  templateUrl: './deleteprod.component.html',
  styleUrls: ['./deleteprod.component.css']
})
export class DeleteprodComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router)
  { this.router.navigate(['ListProd']);}

  ngOnInit(): void {
  }

}
