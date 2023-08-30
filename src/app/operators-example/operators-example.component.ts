import { Component, OnInit } from '@angular/core';
import { concatMap, map, mergeMap, Observable, of, Subject, switchMap, take, tap, zip } from 'rxjs';

interface Order {
  customerId: number;
  amount: number;
}

type Product = ['tomato','potato'];

interface Delivery {
  product: Product; 
  customerId: number;
}

let customerId = 0;
@Component({
  selector: 'app-operators-example',
  templateUrl: './operators-example.component.html',
  styleUrls: ['./operators-example.component.scss']
})
export class OperatorsExampleComponent implements OnInit {


  _delivery = new Observable<Delivery>;
  _product = new Observable<Product>;

  _addPotato = new Subject<'potato'>();
  _addTomato = new Subject<'tomato'>();

  _order = new Subject<Order>();
  ngOnInit(): void {
    this._product = zip(
      this._addPotato.pipe(tap(console.log)),
      this._addTomato.pipe(tap(console.log))
    ).pipe(
      tap((prod) => console.log('enjoy product', prod))
    );

    this._delivery = this._order.pipe(
      tap((order)=>console.log("new order", order)),
      concatMap(({amount,customerId})=> 
         this._product.pipe(
          take(amount),
          map((prod)=> ({product: prod,customerId: customerId}))
        )
      ),
      tap((product)=> console.log('Delviered product: ', product))
    );

    // this._delivery.subscribe();
  }

  orderSomeProdcut() {
    const amount = Math.ceil((Math.random()*5+1));
    ++customerId;
    this._order.next({amount:amount,customerId:customerId});
  }
}
