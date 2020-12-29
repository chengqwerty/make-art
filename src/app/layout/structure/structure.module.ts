import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavMenuComponent } from './widget/sidenav-menu/sidenav-menu.component';


const MATERIAL_MODULE = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [UserLayoutComponent, UserHeaderComponent, UserSidebarComponent, SidenavMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULE
  ]
})
export class StructureModule { }
