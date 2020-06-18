import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { CartServices } from '../cart.service';
import { Cart } from '../cart.model';
import { ProductNew } from '../productNew.model';
import { Order } from '../order.model';
import { NewOrderServices } from '../neworder.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  id: number;
  products : any;

  constructor(private newOrde:NewOrderServices, private route: ActivatedRoute,
    private  router: Router,private http:HttpClient,private cartServi:CartServices) { }
    order : Order[];
    final_total :number =0;
    ngOnInit() {

      let id2 = this.route.snapshot.paramMap.get('id');
      this.http.get("http://localhost:3006/api/product/"+id2).subscribe(posts =>{
        console.log("array"+posts);

  this.products =  posts;
  this.order = this.newOrde.getOrder();

  for(let i of this.order)
    {
      this.final_total = this.final_total + i.product_total;
    }
       
     })
   
    ;
     
    }
  }
