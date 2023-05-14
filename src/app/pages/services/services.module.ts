import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
	declarations: [ServicesComponent],
	exports: [ServicesComponent],
	imports: [
		CommonModule,
		ServicesRoutingModule,
		NzBackTopModule
	]
})
export class ServicesModule { }