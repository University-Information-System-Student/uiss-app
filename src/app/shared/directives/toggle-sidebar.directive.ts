import { Directive, HostBinding, Input, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective implements AfterViewInit {

    @HostBinding('attr.data-toggle')
    @Input()
    get dataToggleGetter(): string {
        return this.dataToggle;
    }

    set dataToggleSetter(value: string) {
        this.dataToggle = value;
    }

    @HostBinding('class') classes = 'fas fa-toggle-on';

    protected dataToggle = 'on';
    protected $wrapper: Element;
    constructor(private renderer: Renderer2) { }


    ngAfterViewInit(): void {
        this.$wrapper = document.getElementsByClassName('wrapper')[0];

    }


    @HostListener('click', ['$event'])
    onClick(e: any): void {

        console.log(this.dataToggle);
        if (this.dataToggle === 'on') {
            this.classes = 'fas fa-toggle-on';
            this.dataToggle = 'off';
            this.classes = 'fas fa-toggle-off';
            this.$wrapper.classList.add('compact-menu');
            this.renderer.addClass(this.$wrapper, 'collapsed-side-bar');
        } else {
            this.classes = 'fas fa-toggle-on';
            this.dataToggle = 'on';
            this.$wrapper.classList.remove('compact-menu');
            this.renderer.removeClass(this.$wrapper, 'collapsed-side-bar');

        }

    }

}
