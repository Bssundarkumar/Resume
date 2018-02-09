export class CertificationsModel {
    public title: string;
    public cname: string;
    public cdate: string;
    public curl: string;
    public cimg: string;

    constructor(
         title: string,
         cname: string,
         cdate: string,
         curl: string,
         cimg: string) {
            this.title = title;
            this.cname = cname;
            this.cdate = cdate;
            this.curl = curl;
            this.cimg = cimg;
    }

}
