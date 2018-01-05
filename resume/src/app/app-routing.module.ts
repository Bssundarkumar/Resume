import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SummaryComponent } from "./summary/summary.component";
import { SkillsComponent } from "./skills/skills.component";


const appRoute: Routes=[
    {path:'',redirectTo:"home", pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'education',component:EducationComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'summary',component:SummaryComponent},
    {path:'skills',component:SkillsComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}