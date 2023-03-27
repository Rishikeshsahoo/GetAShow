import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesDataService } from './services/movies-data.service';
import { HomeComponent } from './pages/home/home.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { MovieInfoBannerComponent } from './components/movie-info-banner/movie-info-banner.component';
import { CircleCrewComponent } from './components/circle-crew/circle-crew.component';
import { BookticketComponent } from './pages/bookticket/bookticket.component';
import { SeatComponent } from './components/seat/seat.component';
import { TheatreSeatsComponent } from './components/theatre-seats/theatre-seats.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    FeaturedComponent,
    ListComponent,
    ListItemComponent,
    HomeComponent,
    MovieInfoComponent,
    MovieInfoBannerComponent,
    CircleCrewComponent,
    BookticketComponent,
    SeatComponent,
    TheatreSeatsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
