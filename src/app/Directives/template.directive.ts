import { Directive, TemplateRef,ViewContainerRef} from "@angular/core";
@Directive({
    selector:'[appTemplate]'
})

export class TemplateDirective {
 
  constructor( private tr:TemplateRef<any>,
    private vr :ViewContainerRef ){
  
         
  }  

}