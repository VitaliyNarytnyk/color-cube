import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';

@NgModule({
	declarations: [ProjectsComponent, ProjectsMainComponent],
	exports: [ProjectsComponent],
	imports: [
		CommonModule,
		ProjectsRoutingModule,
		NzBackTopModule
	]
})
export class ProjectsModule { }