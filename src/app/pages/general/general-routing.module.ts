import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './general.component';
import { GeneralMainComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '', component: GeneralMainComponent
      },
      {
        path: ':id', data: { key: 'general' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
