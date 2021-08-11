import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, Task, Appointment } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Task();
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
  // // TODO: Move to higher container.
  // toggleExpand(itemId: number) {
  //   var tile = document.getElementById(itemId + '_tile-header');
  //   var button = document.getElementById(itemId + '_button');
  //   var content = document.getElementById(itemId + '_content');
  //   if (tile == null || button == null || content == null) return;

  //   if (button.classList.contains('drop--active')) {
  //     content.style.maxHeight = '0';
  //   } else {
  //     // Deactivate any active buttons and content.
  //     document.querySelectorAll('.drop--active').forEach(element => {
  //       var id = element.id.split('_')[0] + '_content';
  //       var element_content = document.getElementById(id);

  //       if (element_content == null) return;

  //       element_content.style.maxHeight = '0';
  //       element.classList.toggle('drop--active');
  //     });

  //     content.style.maxHeight = content.scrollHeight + 'px';
  //   }

  //   button.classList.toggle('drop--active');
  //   tile.classList.toggle('tile-header--active');
  // }
}
