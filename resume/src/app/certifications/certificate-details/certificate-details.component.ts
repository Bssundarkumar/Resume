import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { CertificationsModel } from '../certifications.model';
import { CertificaionsServices } from '../certifications.services';



@Component({
  selector: 'app-certificate-details',
  templateUrl: './certificate-details.component.html',
  styleUrls: ['./certificate-details.component.css']
})
export class CertificateDetailsComponent implements OnInit {
  certificate:CertificationsModel;
  id:number;
  constructor(private certificationservice:CertificaionsServices,private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.params.subscribe(
      (param:Params)=>{
        this.id=+param['id'];
        this.certificate=this.certificationservice.getCertificate(this.id);
        console.log(this.certificate);
      }
    )
  }

}
