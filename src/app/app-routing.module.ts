import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./pages/general/general.module').then(m => m.KitchenModule)
  },
  {
    path: 'width',
    loadChildren: () => import('./pages/width/width.module').then(m => m.WidthModule)
  },
  {
    path: 'special',
    loadChildren: () => import('./pages/special/special.module').then(m => m.SpecialModule)
  },
  {
    path: 'silkscreen',
    loadChildren: () => import('./pages/silkscreen/silkscreen.module').then(m => m.SilkscreenModule)
  },
  {
    path: 'package',
    loadChildren: () => import('./pages/package/package.module').then(m => m.PackageModule)
  },
  {
    path: 'advertising',
    loadChildren: () => import('./pages/advertising/advertising.module').then(m => m.AdvertisingModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then(m => m.PolicyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
