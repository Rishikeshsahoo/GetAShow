import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {
  public state;
  constructor(private location:Location){}
  ngOnInit(){
    this.state=(this.location.getState());
    console.log(this.state)
  }
}
