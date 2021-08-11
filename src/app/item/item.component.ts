import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, Task, Appointment } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Item();
  @Output() accordionEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPriorityClick(id: number) {
    this.item.priority += 1;
    if (this.item.priority > 3) {
      this.item.priority = 0;
    }
  }

  toggleExpand(itemId: number) {
    this.accordionEvent.emit(itemId);
  }

  getItemAsAppointment() {
    return this.item as Appointment;
  }

  getItemAsTask() {
    return this.item as Task;
  }
}
