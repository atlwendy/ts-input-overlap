import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { updateControlOnInputChanges } from '@terminus/ngx-tools';

@Component({
  selector: 'app-test-text-overlap-component',
  templateUrl: './test.component.html',
})

export class TestTextOverlapComponent implements OnChanges {

  stepForm: FormGroup;

  @Input()
  public tacticName: string;

  myValue = 'my value';

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm(): void {
    this.stepForm = this.fb.group({
      tacticName: [null, []],
    });
  }

  public getControl(name: string, form: FormGroup = this.stepForm): AbstractControl | null {
    return form.get(name) ? form.get(name) : null;
  }

  ngOnChanges(changes: SimpleChanges) {
    updateControlOnInputChanges(changes, 'tacticName', this.stepForm.get('tacticName'));

  }

  // inputHasChanged(changes: SimpleChanges, key: string): boolean {
  //   if (!changes || !key) {
  //     return;
  //   }

  //   if (changes[key] && (changes[key].currentValue !== changes[key].previousValue)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // updateControlOnInputChanges(
  //   changes: SimpleChanges,
  //   key: string,
  //   control: AbstractControl | null,
  // ): boolean {
  //   if (!changes || !key || !control) {
  //     return false;
  //   }

  //   if (this.inputHasChanged(changes, key)) {
  //     control.setValue(changes[key].currentValue);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
