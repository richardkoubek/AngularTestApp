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
          <h2>
          {{"maybe " + name}}
          </h2>
          <p>{{name.length}}</p>
          <p>{{name.toUpperCase()}}</p>
          <p>{{greetUser()}}</p>
          `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  public name = "this also works";
  constructor () { }
  greetUser(){
    return "AND " + this.name;
  }
}
