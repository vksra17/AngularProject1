import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private er:ElementRef) {
    er.nativeElement.style.color = "red"
    er.nativeElement.style.backgroundColor = "blue"
    er.nativeElement.style.borderRadius = "20px"
    er.nativeElement.style.padding = "10px"
    er.nativeElement.style.fontSize="25px"
    er.nativeElement.style.fontWeight = "bold"
     }
}
