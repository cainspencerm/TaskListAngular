import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { Item, Task, Appointment } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [{
    name: 'Task',
    description: 'Description of task.',
    priority: 1,
    deadline: new Date('1970-01-01'),
    date: new Date('1970-01-01'),
    isComplete: false,
    isAppointment: false,
    isTask: true
  } as Task,
  {
    name: 'Appointment',
    description: 'Description of appointment.',
    priority: 3,
    start: new Date('1970-01-01'),
    date: new Date('1970-01-01'),
    stop: new Date('1970-01-01'),
    attendees: [],
    isAppointment: true,
    isTask: false
  } as Appointment
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
