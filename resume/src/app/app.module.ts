import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceDetailsComponent } from './experience/experience-details/experience-details.component';
import { ExperienceListComponent } from './experience/experience-list/experience-list.component';
import { ExperienceEmpComponent } from './experience/experience-list/experience-emp/experience-emp.component';
import { ExperienceService } from './experience/experience.serveice';
import { ExperienceStartComponent } from './experience/experience-start/experience-start.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { CertificateDetailsComponent } from './certifications/certificate-details/certificate-details.component';
import { CertificateListComponent } from './certifications/certificate-list/certificate-list.component';
import { CertificaionsServices } from './certifications/certifications.services';
import { CertificteComponent } from './certifications/certificate-list/certificte/certificte.component';
import { ProjectComponent } from './project/project.component';
import { InMemoryWebService } from './inMemoryWebApiService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SummaryComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ExperienceDetailsComponent,
    ExperienceListComponent,
    ExperienceEmpComponent,
    ExperienceStartComponent,
    CertificationsComponent,
    CertificateDetailsComponent,
    CertificateListComponent,
    CertificteComponent,
    ProjectComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebService, { passThruUnknownUrl: true})
  ],
  providers: [ExperienceService, CertificaionsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
