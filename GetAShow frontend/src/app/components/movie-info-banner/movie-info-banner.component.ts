import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-info-banner',
  templateUrl: './movie-info-banner.component.html',
  styleUrls: ['./movie-info-banner.component.scss']
})
export class MovieInfoBannerComponent  {
  state: any;

  constructor(private location:Location,private router:Router){
  }
  onClick(){
    this.router.navigateByUrl("/bookTicket",{state:{title:this.state.title}})
  }
  ngOnInit() {
    
    this.state=(this.location.getState());
    if(!this.state.title)
    {
      this.router.navigateByUrl("/")
    }
  }
}
