import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[configurableHighlight]',
  standalone: true 
})
export class ConfigurableHighlightDirective {
  @Input('highlightColor') highlightColor: string = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(null);
  }

  private setBackgroundColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
