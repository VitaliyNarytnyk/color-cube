import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SilkscreenMainComponent } from './components/silkscreen-main/silkscreen-main.component';
import { SilkscreenComponent } from './silkscreen.component';

const routes: Routes = [
  {
    path: '',
    component: SilkscreenComponent,
    children: [
      {
        path: '', component: SilkscreenMainComponent
      },
      {
        path: ':id', data: { key: 'silkscreen' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SilkscreenRoutingModule { }
