import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';  
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    NzImageModule,
    NzCardModule,
    NzSpaceModule,
    NzTypographyModule,
    NzCollapseModule,
    NzIconModule
  ],
  exports: [PlanComponent]
})
export class PlanModule { }
