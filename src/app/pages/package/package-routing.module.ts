import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageComponent } from './package.component';
import { PackageMainComponent } from './components/package-main/package-main.component';


const routes: Routes = [
  {
    path: '',
    component: PackageComponent,
    children: [
      {
        path: '', component: PackageMainComponent
      },
      {
        path: ':id', data: { key: 'package' }, loadChildren: () => import('../../shared/components/items/items.module').then(m => m.ItemsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
