import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { ResourceComponent } from './resource.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'frame'
  },
  {
    path: 'frame',
    component: ResourceComponent,
    children: [
      {
        path: 'a',
        component: AComponent,
        data: {
          title: 'AAAA'
        }
      },
      {
        path: 'b',
        component: BComponent,
        data: {
          title: 'BBBB'
        }
      },
      {
        path: 'c',
        component: CComponent,
        data: {
          title: 'CCCC'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
