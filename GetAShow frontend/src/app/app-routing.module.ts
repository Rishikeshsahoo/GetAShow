import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketComponent } from './pages/bookticket/bookticket.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"movieInfo", component:MovieInfoComponent},
  {path:"bookTicket", component:BookticketComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
