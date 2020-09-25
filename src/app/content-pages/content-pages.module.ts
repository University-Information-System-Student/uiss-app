import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';



@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    RouterModule
  ]
})
export class ContentPagesModule { }
