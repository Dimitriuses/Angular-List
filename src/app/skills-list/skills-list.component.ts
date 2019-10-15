import { Component, OnInit } from '@angular/core';
import {Sckill} from '../sckill'
import{SCKILL} from '../mock_sckills'

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  Sckills = SCKILL
  selectSckill:Sckill

  constructor() { }

  ngOnInit() {
  }

  onSelect(sckill:Sckill):void{
    this.selectSckill = sckill;
  }

}
