import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPagesRoutingModule } from './content-pages-routing/content-pages-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    RouterModule
  ]
})
export class ContentPagesModule { }
