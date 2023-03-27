import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-theatre-seats',
  templateUrl: './theatre-seats.component.html',
  styleUrls: ['./theatre-seats.component.scss']
})
export class TheatreSeatsComponent {
  public seats = []
  public nine = []
  public ten = []
  public twelve = []

  @Input("setted") setted
  @Input("title") title

  public i:any=0;
  
  public char = 65;
  public set = new Set()



  public seatsBooked = (seat,idx) => {
    
    if(seat!=="-1")return;
    if(this.set.has(idx))
        this.set.delete(idx)
    else
        this.set.add(idx)
        
        console.log(this.set)
        this.eventEmmiter.emit(Array.from(this.set))
    
  }
  constructor(private showService:ShowsService){
   
  }

  @Output() eventEmmiter = new EventEmitter()

  ngOnChanges(){
    console.log("hi")
    this.set.clear()
  }

  ngOnInit(){
    console.log("hi")
    this.showService.getShows({th_name:"PVR Pacific",
    date:"17/12/2022",
    movieName:this.title}).subscribe((data)=>{
      this.nine=(data["data"][0])?(data["data"][0]['shows']['nine']):new Array(250).fill("-1")
      this.ten=(data["data"][0])?(data["data"][0]['shows']['ten']):new Array(250).fill("-1")
      this.twelve=(data["data"][0])?(data["data"][0]['shows']['twelve']):new Array(250).fill("-1")
      console.log(this.nine)
    })
  }

  
    
  

   

}
