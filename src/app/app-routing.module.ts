import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContentPagesModule } from './content-pages/content-pages.module';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { CONTENT_ROUTES } from './shared/app-routes/content-routes';
import { FULL_ROUTES } from './shared/app-routes/full-routes';

const appRoutes: Routes = [

  { path: '', component: AppLayoutComponent, data: { title: 'full Views' }, children: FULL_ROUTES},
  { path: '', component: PagesLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ContentPagesModule]
})
export class AppRoutingModule { }
