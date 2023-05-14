import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { ProjectsComponent } from './projects.component';



const routes: Routes = [
	{
		path: '',
		component: ProjectsComponent,
		children: [
			{
				path: '', component: ProjectsMainComponent
			},
			{
				path: ':id', data: { key: 'projects' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
			},
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectsRoutingModule { }