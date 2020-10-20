import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { DirectivesModule } from './directives/directives.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppSidebarComponent],
  imports: [
    DirectivesModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [AppSidebarComponent]
})
export class SharedModule { }
