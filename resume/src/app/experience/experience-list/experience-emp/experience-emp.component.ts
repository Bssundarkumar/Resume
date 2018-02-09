import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../experience.model';

@Component({
  selector: 'app-experience-emp',
  templateUrl: './experience-emp.component.html',
  styleUrls: ['./experience-emp.component.css']
})
export class ExperienceEmpComponent implements OnInit {
  @Input() experience: Experience;
  @Input() index= 0;
  constructor() { }

  ngOnInit() {
  }

}
