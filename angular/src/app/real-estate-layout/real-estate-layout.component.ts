import { Component } from '@angular/core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';

@Component({
  selector: 'app-real-estate-layout',
  templateUrl: './real-estate-layout.component.html',
  styleUrls: ['./real-estate-layout.component.scss'],
})
export class RealEstateLayoutComponent {

  constructor() { }
  logoComponentKey = eThemeBasicComponents.Logo;
  routesComponentKey = eThemeBasicComponents.Routes;
  navItemsComponentKey = eThemeBasicComponents.NavItems;
} 