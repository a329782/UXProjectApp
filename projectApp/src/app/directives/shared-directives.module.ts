import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './has-permission.directive';
import { DisableRoleDirective } from './disable-role.directive';



@NgModule({
  declarations: [
    HasPermissionDirective,
    DisableRoleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HasPermissionDirective, DisableRoleDirective]
})
export class SharedDirectivesModule { }
