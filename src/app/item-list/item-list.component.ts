import { Component, OnInit } from '@angular/core';
import { Item, Task, Appointment } from '../item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public items: Item[] = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Description',
      priority: 3,
      date: new Date('1970-01-01'),
      isAppointment: false,
      isTask: true,
      deadline: new Date('1970-01-01'),
      isComplete: false
    } as Task,
    {
      id: 2,
      name: 'Appointment 2',
      description: 'Description',
      priority: 3,
      date: new Date('1970-01-01'),
      isAppointment: true,
      isTask: false,
      start: new Date('1970-01-01'),
      stop: new Date('1970-01-01'),
      attendees: ['Spencer', 'Preston', 'Spencer', 'Preston', 'Spencer', 'Preston']
    } as Appointment,
    {
      id: 3,
      name: 'Task 3',
      description: 'Description',
      priority: 3,
      date: new Date('1970-01-01'),
      isAppointment: false,
      isTask: true,
      deadline: new Date('1970-01-01'),
      isComplete: true
    } as Task,
    {
      id: 4,
      name: 'Appointment 4',
      description: 'Description',
      priority: 3,
      date: new Date('1970-01-01'),
      isAppointment: true,
      isTask: false,
      start: new Date('1970-01-01'),
      stop: new Date('1970-01-01'),
      attendees: ['Spencer', 'Preston', 'Spencer', 'Preston', 'Spencer', 'Preston']
    } as Appointment
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: Move to higher container.
  toggleExpand(itemId: number) {
    var tile = document.getElementById(itemId + '_tile-header');
    var button = document.getElementById(itemId + '_button');
    var content = document.getElementById(itemId + '_content');
    if (tile == null || button == null || content == null) return;

    if (button.classList.contains('drop--active')) {
      content.style.maxHeight = '0';
    } else {
      // Deactivate any active buttons and content.
      document.querySelectorAll('.drop--active').forEach(element => {
        var id = element.id.split('_')[0];
        var element_content = document.getElementById(id + '_content');
        var element_tile = document.getElementById(id + '_tile-header')

        if (element_content == null || element_tile == null) return;

        element_content.style.maxHeight = '0';
        element.classList.toggle('drop--active');
        element_tile?.classList.toggle('tile-header--active');
      });

      content.style.maxHeight = content.scrollHeight + 'px';
    }

    button.classList.toggle('drop--active');
    tile.classList.toggle('tile-header--active');
  }
}
