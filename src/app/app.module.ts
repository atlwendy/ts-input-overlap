import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TtComponent } from './tt/tt.component';
import { TestTextOverlapComponent } from './test/test.component';
import { TestTextOverlapContainerComponent } from './test/test-container.component';
import { TestTextOverlapModule } from './test/test.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TsInputModule } from '@terminus/ui';
import { TsButtonModule } from '@terminus/ui';
import { TsWindowService } from '@terminus/ngx-tools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TtComponent,
    TestTextOverlapComponent,
    TestTextOverlapContainerComponent,
  ],
  imports: [
    BrowserModule,
    TestTextOverlapModule,
    ReactiveFormsModule,
    FormsModule,
    TsInputModule,
    TsButtonModule,
  ],
  providers: [
    TsWindowService,
  ],
  bootstrap: [AppComponent],
  exports: [
    BrowserAnimationsModule,
  ],
})
export class AppModule { }
