import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    SwiperModule,
    NzIconModule
  ]
})
export class SliderModule { }
