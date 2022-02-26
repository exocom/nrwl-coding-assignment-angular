import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskPageRoutingModule } from './task-page-routing.module';
import { TaskPageComponent } from './task-page.component';


@NgModule({
  declarations: [
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    TaskPageRoutingModule
  ],
  exports: [
    TaskPageComponent
  ]
})
export class TaskPageModule { }
