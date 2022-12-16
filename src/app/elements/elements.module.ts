import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { SharedModule } from '../shared/shared.module';
import { ElementplaceholderComponent } from './elementplaceholder/elementplaceholder.component';
import { ElementSegmentComponent } from './element-segment/element-segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    ElementplaceholderComponent,
    ElementSegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
