import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialComponent } from './special.component';
import { SpecialMainComponent } from './components/special-main/special-main.component';

const routes: Routes = [
  {
    path: '',
    component: SpecialComponent,
    children: [
      {
        path: '', component: SpecialMainComponent
      },
      {
        path: ':id', data: { key: 'special' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
