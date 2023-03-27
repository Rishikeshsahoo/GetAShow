import { Component, ElementRef, ViewChild } from '@angular/core';
import { MoviesDataService } from 'src/app/services/movies-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public slidecnt=0;
  public data:any;

  
  @ViewChild('inputRef') inputRef:ElementRef;
  public handleClick=(params)=>{
    this.inputRef.nativeElement;
    const rect= this.inputRef.nativeElement.getBoundingClientRect().x-50;
    if(params==="left" && this.slidecnt>0)
    {
      this.slidecnt-=1;
      this.inputRef.nativeElement.style.transform=`translateX(${235+rect}px)`;
    }
    if(params==='right' && this.slidecnt<6)
    {
      this.slidecnt+=1;
      this.inputRef.nativeElement.style.transform=`translateX(${-235+rect}px)`;

    }
   
  }
 
  constructor(private movieDataService:MoviesDataService){}
  ngOnInit(): void {
   this.movieDataService.getMovies().subscribe(movies=>this.data=movies)
    // console.log(this.data)
  }
}
