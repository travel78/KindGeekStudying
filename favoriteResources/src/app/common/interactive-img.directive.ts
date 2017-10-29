import {Directive, HostBinding, HostListener} from '@angular/core';
import {animation} from "@angular/animations";

@Directive({
  selector: '[appInteractiveImg]'

})
export class InteractiveImgDirective {
  @HostBinding('style.transform') state = 'scale(1,1)';

  constructor() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.state ='scale(1.1,1.1 )';
  }
  @HostListener('mouseleave') onMouseOut() {
    this.state = 'scale(1,1)';
  }
}
