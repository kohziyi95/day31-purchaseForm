import { Item } from '../model';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  @Output()
  onNewOrder = new Subject<Item>();

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control('', [
        Validators.required,
        Validators.pattern('[0-9.]*'),
      ]),
      quantity: this.fb.control(1, [Validators.required]),
    });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  processForm() {
    console.info('Add button clicked!');
    // console.info('name >>>> ' + this.regForm.value.name);
    const item: Item = this.itemForm.value as Item;
    this.onNewOrder.next(item);
    console.info('item >>>> ' + item);
  }
}
