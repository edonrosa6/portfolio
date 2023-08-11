import { Component } from '@angular/core';
import { faArrowDown, faCoffee, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faDownload = faDownload;
  faCoffee = faCoffee;
  faArrow = faArrowDown;
}
