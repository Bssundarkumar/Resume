export class CertificationsModel{
    private title:string;
    private cname:string;
    private cdate:string;
    private curl:string;
    private cimg:string;

    constructor(
         title:string,
         cname:string,
         cdate:string,
         curl:string,
         cimg:string){
            this.title=title;
            this.cname=cname;
            this.cdate=cdate;
            this.curl=curl;
            this.cimg=cimg;
    }

}