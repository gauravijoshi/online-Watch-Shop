//import {Product} from './product.model';
import {Cart} from './cart.model';
import { Component, EventEmitter} from '@angular/core';
import { Myorders } from './myorders.model';
// import { Component, EventEmitter, Injectable} from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import {map} from 'rxjs/operators';
// import { from } from 'rxjs';

//@Injectable()
export class MyOrderServices
{
    MyordersChanged = new EventEmitter<Cart[]>();
    myorders : Myorders[] =
  [
   

      
  ];


    getmyorders()
    {
        return this.myorders.slice();
    }

    
    addMyorders(myordersitems:Myorders)
      {
          this.myorders.push(myordersitems);
          this.MyordersChanged.emit(this.myorders.slice());
      }

    }