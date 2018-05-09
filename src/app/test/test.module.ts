import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TsButtonModule,
  TsInputModule,
} from '@terminus/ui';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestTextOverlapComponent } from './test.component';
import { TestTextOverlapContainerComponent } from './test-container.component';



@NgModule({
  imports: [
    CommonModule,
    TsButtonModule,
    TsInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  declarations: [
  ],
})
export class TestTextOverlapModule { }
