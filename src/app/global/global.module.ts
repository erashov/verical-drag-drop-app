import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReorderDirective } from './directives/reorder.directive';



@NgModule({
  declarations: [
    ReorderDirective
  ],
  exports:[ReorderDirective],
  imports: [
    CommonModule
  ]
})
export class GlobalModule { }
