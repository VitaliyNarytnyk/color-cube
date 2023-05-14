import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidthMainComponent } from './components/width-main/width-main.component';
import { WidthComponent } from './width.component';

const routes: Routes = [
  {
    path: '',
    component: WidthComponent,
    children: [
      {
        path: '', component: WidthMainComponent
      },
      {
        path: ':id', data: { key: 'width' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidthRoutingModule { }
