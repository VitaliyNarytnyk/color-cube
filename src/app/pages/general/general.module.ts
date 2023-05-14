import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { GeneralMainComponent } from './components';

@NgModule({
  declarations: [GeneralComponent, GeneralMainComponent],
  exports: [GeneralComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    NzCollapseModule,
    NzBackTopModule
  ]
})
export class KitchenModule { }
