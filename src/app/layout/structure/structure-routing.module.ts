import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    data: { title: '框架' },
    children: [
      {
        path: 'frame',
        loadChildren: () => import('../../routes/routes.module').then(m => m.RoutesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
