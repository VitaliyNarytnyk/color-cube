import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
	declarations: [ContactsComponent],
	exports: [ContactsComponent],
	imports: [
		CommonModule,
		ContactsRoutingModule,
		ReactiveFormsModule,
		NzBackTopModule,
		NgxMaskModule
	]
})
export class ContactsModule { }