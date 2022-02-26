import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
