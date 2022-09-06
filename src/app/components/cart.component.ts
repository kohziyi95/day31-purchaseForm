import { Item } from '../model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  cart!:Array<Item>;

  @Input()
  set newItem(item:Item){
    console.info(">>>> set: ", item)
    this._newItem = item;
    this.cart.push(item);
    this.updatePrice(item.price, item.quantity, true);
    console.info('update item cart >>>>> ', this.cart);
  };
  get newItem(): Item {
    return this._newItem;
  }

  totalPrice:number = 0;

  updatePrice(n:number, qty:number, add:boolean){
    if (add) {
      this.totalPrice += n*qty;
    } else {
      this.totalPrice -= n*qty;
    }
    console.info("new total price >>>> " + this.totalPrice)
  }

  delete(index:number){
    let price = this.cart[index].price;
    let quantity = this.cart[index].quantity;
    this.updatePrice(price,quantity,false);
    this.cart.splice(index,1);
  }

  private _newItem!:Item;

  ngOnInit(): void {
    this.cart = [];
    console.info("newItem >>>>> " + this.newItem);
    console.info('item cart >>>>> ' + this.cart);
  }




}
