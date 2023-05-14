import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { WidthComponent } from './width.component';
import { WidthRoutingModule } from './width-routing.module';
import { WidthMainComponent } from './components/width-main/width-main.component';


@NgModule({
  declarations: [WidthComponent, WidthMainComponent],
  exports: [WidthComponent],
  imports: [
    CommonModule,
    WidthRoutingModule,
    NzBackTopModule
  ]
})
export class WidthModule { }
