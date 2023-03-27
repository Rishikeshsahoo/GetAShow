import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.scss']
})
export class BookticketComponent {
  constructor(private showService:ShowsService,private router:Router, private location:Location){}
  public state;
  handleSubmit(){
    
    this.showService.addShow(this.setted,this.set,this.state.title).subscribe(movies=>console.log(movies))
    this.router.navigateByUrl("/")
   
  }
  public setted="nine";
  selectTime(params){
    if(params==='nine'){
      this.setted="nine";
    }
    if(params==='ten'){
      this.setted="ten";
    }
    if(params==='twelve'){
      this.setted="twelve";
    }
    this.set=[]
  }
  public set= []
  setTheSet(event)
  {
    this.set=event;
  }
  ngOnInit(){
    this.state=(this.location.getState());
    if(!this.state.title)
    {
      this.router.navigateByUrl("/")
    }
  }

  

}
