import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { SilkscreenRoutingModule } from './silkscreen-routing.module';
import { SilkscreenMainComponent } from './components/silkscreen-main/silkscreen-main.component';
import { SilkscreenComponent } from './silkscreen.component';

@NgModule({
  declarations: [SilkscreenComponent, SilkscreenMainComponent],
  exports: [SilkscreenComponent],
  imports: [
    CommonModule,
    SilkscreenRoutingModule,
    NzBackTopModule
  ]
})
export class SilkscreenModule { }
