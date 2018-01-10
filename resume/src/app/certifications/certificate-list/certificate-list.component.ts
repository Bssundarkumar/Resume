import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { CertificationsModel } from '../certifications.model';
import { CertificaionsServices } from '../certifications.services';



@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {
  @Output() selectedCertification= new EventEmitter<CertificationsModel>();
  certificatesList:CertificationsModel[];
  constructor(private certificaionsServices: CertificaionsServices) { }

  ngOnInit() {
    this.certificatesList=this.certificaionsServices.getCertificates();
  }

}
