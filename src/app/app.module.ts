import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabStrategy } from './layout/structure/widget/reuse-tab/reuse-tab.strategy';
import { RoutesModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RoutesModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: ReuseTabStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
