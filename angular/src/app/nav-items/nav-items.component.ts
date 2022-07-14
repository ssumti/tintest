import { AuthService, ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
  
})
export class NavItemsComponent {

  constructor(private authService: AuthService, private configState: ConfigStateService) { }
  @HostBinding('class.cusmxauto')
  marginAuto = true;
  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  logIn(){
    this.authService.navigateToLogin();
  }
  logOut(){
    this.authService.logout().subscribe();
  }
}