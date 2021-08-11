import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PriorityPipe } from './item/priority.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    PriorityPipe,
    ItemListComponent,
    AppointmentDetailsComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
