import { Component } from '@angular/core';

@Component({
  selector: 'app-test-text-overlap-container-component',
  template: `
    <app-test-text-overlap-component
      [tacticName]="id"
    >
    </app-test-text-overlap-component>
  `,
})
export class TestTextOverlapContainerComponent {

  id = 'this is weird!';

  constructor(
  ) { }
}
