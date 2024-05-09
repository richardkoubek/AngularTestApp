import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <h2>
          {{name}}
          </h2>
          <p>
          {{2 + 2}}
          </p>
          `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  public name = "this also works";
  constructor () { }
}
