import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from './shared/app-sidebar/app-sidebar.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    AppLayoutComponent,
    PagesLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
