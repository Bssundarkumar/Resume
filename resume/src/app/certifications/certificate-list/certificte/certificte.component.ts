import { Component, OnInit, Input } from '@angular/core';
import { CertificationsModel } from '../../certifications.model';

@Component({
  selector: 'app-certificte',
  templateUrl: './certificte.component.html',
  styleUrls: ['./certificte.component.css']
})
export class CertificteComponent implements OnInit {
  @Input() certificateMod: CertificationsModel;
  @Input() index=0;
  constructor() { }

  ngOnInit() {
  }

}
