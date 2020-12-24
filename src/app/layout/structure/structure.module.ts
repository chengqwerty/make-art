import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


const MATERIAL_MODULE = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [UserLayoutComponent, UserHeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    ...MATERIAL_MODULE
  ]
})
export class StructureModule { }