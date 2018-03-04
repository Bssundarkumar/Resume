import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.serveice';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
  experience: Experience;
  experiences: Experience[];
  id: number;
  constructor(private experienceService: ExperienceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (parms: Params) => {
        this.id = +parms['id'];
        // this.experienceService.getExperienced(this.id);
        this.experienceService.getExperience().subscribe(
          (experienceList) => {
            this.experience = experienceList[this.id];
          }
        );
      }
    );
  }

}
