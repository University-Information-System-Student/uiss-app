import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContentPagesModule } from './content-pages/content-pages.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: (() => import('./content-pages/content-pages.module').then(m => m.ContentPagesModule))
  },
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
