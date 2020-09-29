import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { DirectivesModule } from './directives/directives.module';



@NgModule({
  declarations: [AppSidebarComponent],
  imports: [
    DirectivesModule,
    CommonModule
  ],
  exports: [AppSidebarComponent]
})
export class SharedModule { }
