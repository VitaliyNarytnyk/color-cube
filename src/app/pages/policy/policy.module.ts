import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { PolicyComponent } from './policy.component';
import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
	declarations: [PolicyComponent],
	exports: [PolicyComponent],
	imports: [
		CommonModule,
		PolicyRoutingModule,
		NzBackTopModule
	]
})
export class PolicyModule { }