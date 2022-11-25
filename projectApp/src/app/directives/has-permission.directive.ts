import { AuthService } from './../auth.service';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {

  @Input('appHasPermission') permissions: string[];

  constructor(private authService: AuthService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.authService.getUser().subscribe(_ => {
      if (this.authService.hasPermission(this.permissions)){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else {
        this.viewContainer.clear();
      }
    });
  }

}
