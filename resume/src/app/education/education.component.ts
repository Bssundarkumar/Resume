import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  showMode= true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onShowCertificate() {

    this.router.navigate(['education/certifications']);
    this.showMode = false;
  }
  onHideCertificate() {
    this.router.navigate(['education']);
    this.showMode = true;
  }


}
