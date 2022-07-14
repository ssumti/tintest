import { ReplaceableComponentsService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { RouteComponent } from './route/route.component';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { RealEstateLayoutComponent } from './real-estate-layout/real-estate-layout.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(private replaceableComponents: ReplaceableComponentsService) {
  }
  ngOnInit(): void {
    this.replaceableComponents.add({
      component: RealEstateLayoutComponent,
      key: eThemeBasicComponents.ApplicationLayout,
    });
    this.replaceableComponents.add({
      component: LogoComponent,
      key: eThemeBasicComponents.Logo,
    });
    this.replaceableComponents.add({
      component: RouteComponent,
      key: eThemeBasicComponents.Routes,
    });
    this.replaceableComponents.add({
      component: NavItemsComponent,
      key: eThemeBasicComponents.NavItems,
    });
}
}
