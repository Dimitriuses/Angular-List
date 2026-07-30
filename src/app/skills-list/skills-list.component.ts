import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  skills = SKILLS;
  selectedSkill: Skill;

  constructor() { }

  ngOnInit() {
  }

  onSelect(skill: Skill): void {
    this.selectedSkill = skill;
  }

}
