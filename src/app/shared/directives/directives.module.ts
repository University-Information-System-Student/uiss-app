import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSidebarDirective } from './toggle-sidebar.directive';



@NgModule({
  declarations: [ToggleSidebarDirective],
  imports: [
    CommonModule
  ],
  exports: [ToggleSidebarDirective]
})
export class DirectivesModule { }
