import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resource',
    pathMatch: 'full'
  },
  {
    path: 'resource',
    loadChildren: () => import('./layout/resource/resource.module').then(m => m.ResourceModule)
  },
  {
    path: 'structure',
    loadChildren: () => import('./layout/structure/structure.module').then(m => m.StructureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
