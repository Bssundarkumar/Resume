import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.serveice';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit  {
  // @Output() selectedExperience = new EventEmitter<Experience>();
  experiences: Experience[];
  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
   this.experiences = this.experienceService.getExperience();
   }
}
