import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {

  constructor() { }
  @HostBinding('class.cusmxauto')
  marginAuto = true;

}
