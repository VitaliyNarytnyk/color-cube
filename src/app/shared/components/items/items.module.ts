import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { SliderModule } from '../slider';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  exports: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SliderModule
  ]
})
export class ItemsModule { }
