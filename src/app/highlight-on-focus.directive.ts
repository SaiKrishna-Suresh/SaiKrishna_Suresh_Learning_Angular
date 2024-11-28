import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input() highlightColor: string ='yellow';
  private originalBackgroundColor: string | null ='';


  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener('focus') onFocus(){
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',this.highlightColor);

  }
  @HostListener('blur') onBlur(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',this.originalBackgroundColor);
  }

}
