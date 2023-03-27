import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  private url : string = "http://localhost:7000/movies/getmovies";

  constructor(private http : HttpClient) { }

  getMovies () {
    return this.http.get(this.url)
  }
}
