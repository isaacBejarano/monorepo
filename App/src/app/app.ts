import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styles: [],
  template: `
    <h1>Hello, {{ title() }}</h1>

    <router-outlet />
  `,
})
export class App implements OnInit {
  readonly title = signal('App');

  ngOnInit():void {
  console.log('INIT 2...');
  }
}
