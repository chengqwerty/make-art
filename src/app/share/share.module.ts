import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL_MODULE = [
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
];

const ANGULAR_MODULE = [
  // BrowserAnimationsModule,
  HttpClientModule,
  RouterModule
];

const FLEX_LAYOUT_MODULE = [
  FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ANGULAR_MODULE,
    MATERIAL_MODULE,
    FLEX_LAYOUT_MODULE
  ],
  exports: [
    ANGULAR_MODULE,
    MATERIAL_MODULE,
    FLEX_LAYOUT_MODULE
  ]
})
export class ShareModule { }
