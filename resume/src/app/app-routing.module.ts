import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SummaryComponent } from "./summary/summary.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceStartComponent } from "./experience/experience-start/experience-start.component";
import { ExperienceDetailsComponent } from "./experience/experience-details/experience-details.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { CertificateDetailsComponent } from "./certifications/certificate-details/certificate-details.component";
import { ProjectComponent } from "./project/project.component";


const appRoute: Routes=[
    {path:'',redirectTo:"home", pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'education',component:EducationComponent,children:[
        {path:'',redirectTo:"0",pathMatch:'full'},
        {path:'certifications',component:CertificationsComponent,children:[
            {path:'',redirectTo:"0",pathMatch:'full'},
            {path:'+0',component:CertificateDetailsComponent},
            {path:':id', component:CertificateDetailsComponent}
        ]}

    ]},
    {path:'experience',component:ExperienceComponent,children:[
            {path:'',redirectTo:"0",pathMatch:'full'},
            {path:'+0',component:ExperienceDetailsComponent},
            {path:':id', component:ExperienceDetailsComponent}
    ]},
    {path:'summary',component:SummaryComponent},
    {path:'skills',component:SkillsComponent},
    {path:'certifications',component:CertificationsComponent,children:[
        {path:'',redirectTo:"0",pathMatch:'full'},
        {path:'+0',component:CertificateDetailsComponent},
        {path:':id', component:CertificateDetailsComponent}
    ]},
    {path:'projects',component:ProjectComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}