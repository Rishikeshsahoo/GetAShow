import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-crew',
  templateUrl: './circle-crew.component.html',
  styleUrls: ['./circle-crew.component.scss']
})
export class CircleCrewComponent {
constructor(){}
@Input("state") state;
}
