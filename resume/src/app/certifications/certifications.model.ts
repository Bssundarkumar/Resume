export class CertificationsModel{
    private title:string;
    private certificationName:string;
    private certificationDate:string;
    private certificationurl:string;
    private certificationImg:string;

    constructor(
         title:string,
         certificationName:string,
         certificationDate:string,
         certificationurl:string,
         certificationImg:string){
            this.title=title;
            this.certificationName=certificationName;
            this.certificationDate=certificationDate;
            this.certificationurl=certificationurl;
            this.certificationImg=certificationImg;
    }

}