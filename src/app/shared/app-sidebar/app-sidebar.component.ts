import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ROUTES } from './app-sidebar-route.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit, AfterViewInit {

  menuItems = ROUTES;
  protected $wrapper: Element;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
      this.$wrapper = this.renderer.parentNode(this.el.nativeElement);
    }

  @HostListener('mouseenter', ['$event'])
  onMouseOver(e: any): void {
    if (this.$wrapper.classList.contains('collapsed-side-bar')) {
      this.renderer.removeClass(this.$wrapper, 'collapsed-side-bar');

    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseOut(e: any): void {
    if (this.$wrapper.classList.contains('compact-menu')) {
      this.renderer.addClass(this.$wrapper, 'collapsed-side-bar');
    }
  }


}
