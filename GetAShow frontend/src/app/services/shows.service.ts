import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private url : string = "http://localhost:7000/show/getShow";
  private url2 : string ="http://localhost:7000/show/createShow";


  constructor(private http : HttpClient) { }

  getShows (data:any) {
    console.log(data)
    return this.http.post(this.url,data)
  }
  addShow (setted,set,title) {
    
    let nine=[]
    let ten=[]
    let twelve=[]

    if(setted==='nine')nine=set;
    if(setted==='ten')ten=set;
    if(setted==='twelve')twelve=set;


    const data={
      username:"Rohit",
    th_name:"PVR Pacific",
    date:"17/12/2022",
    movieName:title,
    bookedShow:{
        "nine":nine,
        "ten":ten,
        "twelve":twelve
    }
    }
    console.log(title)
    return this.http.post(this.url2,data)
  }

}
