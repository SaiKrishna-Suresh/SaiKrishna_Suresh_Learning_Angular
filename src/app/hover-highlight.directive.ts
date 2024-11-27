import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight')highlightColor:string ='pink';
  @Input()defaultColor:string='transparent';

  constructor(private el:ElementRef,private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.defaultColor);


  }
  @HostListener('mouseenter')onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.highlightColor);
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.defaultColor);
  }
}
