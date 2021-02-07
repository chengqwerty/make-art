import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { SidenavMenuComponent } from './widget/sidenav-menu/sidenav-menu.component';
import { ReuseTabComponent } from './widget/reuse-tab/reuse-tab.component';
import { ShareModule } from '../../share/share.module';
import { StructureRoutingModule } from './structure-routing.module';
import { StructureComponent } from './structure.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    UserHeaderComponent,
    UserSidebarComponent,
    SidenavMenuComponent,
    ReuseTabComponent,
    StructureComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    StructureRoutingModule
  ]
})
export class StructureModule { }
