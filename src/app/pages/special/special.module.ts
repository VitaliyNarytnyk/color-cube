import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { SpecialRoutingModule } from './special-routing.module';
import { SpecialComponent } from './special.component';
import { SpecialMainComponent } from './components/special-main/special-main.component';

@NgModule({
  declarations: [SpecialComponent, SpecialMainComponent],
  exports: [SpecialComponent],
  imports: [
    CommonModule,
    SpecialRoutingModule,
    NzCollapseModule,
    NzBackTopModule
  ]
})
export class SpecialModule { }
