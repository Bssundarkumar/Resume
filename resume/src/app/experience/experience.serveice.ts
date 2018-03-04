import { Injectable } from '@angular/core';
import { Experience } from './experience.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ExperienceService {
  private experiences: Experience[];
  experiencess = new Subject<Experience[]>();
  experienceUrl = 'api/experienceList';
  constructor(private httpclient: HttpClient) {}
  setExperiences(experienceList: Experience[]) {
    this.experiences = experienceList;
  }
  getExperience(): Observable<Experience[]> {
    return this.httpclient.get<Experience[]>(this.experienceUrl);
  }
}
