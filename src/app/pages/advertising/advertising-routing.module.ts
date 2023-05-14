import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingMainComponent } from './components/advertising-main/advertising-main.component';
import { AdvertisingComponent } from './advertising.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisingComponent,
    children: [
      {
        path: '', component: AdvertisingMainComponent
      },
      {
        path: ':id', data: { key: 'advertising' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisingRoutingModule { }
