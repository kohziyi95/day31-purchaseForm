import { Item } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31-purchaseForm';

  newItem!:Item

  newOrder(item: Item) {
    console.info (">>>>>>>>> new order: ", item);
    this.newItem = item;
  }
}
