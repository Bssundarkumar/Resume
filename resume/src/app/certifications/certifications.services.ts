import { CertificationsModel } from "./certifications.model";

export class CertificaionsServices{
   private certificatesList:CertificationsModel[]=[
    new CertificationsModel('Spring and Hibernate','Certificate Of Course Completion -Spring and Hibernate',
    'June 2017','https://www.udemy.com/certificate/UC-YS2Z9OUV/','assets/images/Spring-Hibernate.jpg'),
    new CertificationsModel('Typescript','Certificate Of Course Completion -Typescript',
    'Sept 2017','https://www.udemy.com/certificate/UC-JD18N3KS/','assets/images/TypeScript.jpg'),
    new CertificationsModel('Angular 2','Certificate Of Course Completion -Angular 2',
    'Sept 2017',
    'https://www.udemy.com/certificate/UC-VLNL20SI/',
    'assets/images/angular 2.jpg')

   ];

   getCertificates(){
       return this.certificatesList.slice();
   }
   getCertificate(id:number){
    return this.certificatesList[id];
}
}