import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <a class="navbar-brand" href="/home"><img src="../../assets/pics/Untitled.png" alt="Logo here"
                          style="width: 80%;"></a>
  `,  
  styles: [
    
  ]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
