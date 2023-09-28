import { Component } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faArrowDown = faArrowDown;
  faArrowZa = faArrowDownZA;
}
