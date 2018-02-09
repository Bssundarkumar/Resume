import { Component, OnInit, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
   phoneNumber= '+1(816)-517-2836';
  constructor() {
  }

  ngOnInit() {
  }

}
