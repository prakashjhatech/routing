import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLableComponent } from './header-lable/header-lable.component';



@NgModule({
  declarations: [
    HeaderLableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderLableComponent
  ]
})
export class SharedModule { }
