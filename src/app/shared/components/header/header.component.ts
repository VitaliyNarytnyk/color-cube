import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('collapse', [
      state('false', style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE
      })),
      state('true', style({
        height: '0',
        visibility: 'hidden'
      })),
      transition('true => false', animate('300ms ease-in')),
      transition('false => true', animate('300ms ease-out'))
    ])
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  active: boolean = false
  collapse: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  toggleActive(): void {
    this.active = !this.active;
  }

}
