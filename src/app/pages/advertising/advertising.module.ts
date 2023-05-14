import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisingMainComponent } from './components/advertising-main/advertising-main.component';
import { AdvertisingComponent } from './advertising.component';

@NgModule({
  declarations: [AdvertisingComponent, AdvertisingMainComponent],
  exports: [AdvertisingComponent],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
    NzBackTopModule
  ]
})
export class AdvertisingModule { }
