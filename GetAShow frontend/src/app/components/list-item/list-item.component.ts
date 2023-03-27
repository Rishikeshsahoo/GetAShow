import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  public isHovered=false;
  @Input('movie') movie;
  constructor(private router:Router){}
  onClick(){

    this.router.navigateByUrl('/movieInfo', { state: this.movie });
  }

}
