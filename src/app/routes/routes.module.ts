import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { ZComponent } from './z/z.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [XComponent, YComponent, ZComponent],
  imports: [
    CommonModule,
    ShareModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
