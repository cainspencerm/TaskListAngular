import { Component, OnInit } from '@angular/core';
import { Item, Task, Appointment } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [{
    id: 1,
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
    id: 2,
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

  onPriorityClick(id: number) {
    this.items.forEach(element => {
      if (element.id == id) {
        element.priority += 1;

        if (element.priority > 3) {
          element.priority = 0;
        }
      }
    });
  }

  toggleExpand(buttonId: string, contentId: string) {
    var button = document.getElementById(buttonId);
    var content = document.getElementById(contentId);
    if (button == null || content == null) return;

    if (button.classList.contains('drop__button--active')) {
      content.style.maxHeight = '0';
    } else {
      // Deactivate any active buttons and content.
      document.querySelectorAll('.drop__button--active').forEach(element => {
        var id = element.id.split('_')[0] + '_content';
        var element_content = document.getElementById(id);

        if (element_content == null) return;

        element_content.style.maxHeight = '0';
        element.classList.toggle('drop__button--active');
      });

      content.style.maxHeight = content.scrollHeight + 'px';
    }

    button.classList.toggle('drop__button--active');
  }
}
