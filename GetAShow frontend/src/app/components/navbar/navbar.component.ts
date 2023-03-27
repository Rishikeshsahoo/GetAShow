import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isScrolled=false;

  public styleCond={
    "navbar":true,
    "scrolled":this.isScrolled
  }

  public func=window.onscroll=()=>{
    this.isScrolled=(window.pageYOffset===0)?false:true;
    return ()=>{window.onscroll=null}
  }
}
