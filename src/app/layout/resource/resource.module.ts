import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { ResourceRoutingModule } from './resource-routing.module';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [
    ResourceComponent,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
