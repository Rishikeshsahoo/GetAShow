import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent {
  public isActive=false;
  public handleClick=()=>{
    this.isActive=!this.isActive;
  }
  @Input('idx') idx;
  @Input('seat') seat;

}
