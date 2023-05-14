import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { PackageRoutingModule } from './package-routing.module';
import { PackageComponent } from './package.component';
import { PackageMainComponent } from './components/package-main/package-main.component';


@NgModule({
  declarations: [PackageComponent, PackageMainComponent],
  exports: [PackageComponent],
  imports: [
    CommonModule,
    PackageRoutingModule,
    NzBackTopModule
  ]
})
export class PackageModule { }
