import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectedChoice = new EventEmitter<string>()

  constructor() { }

  onSelect(P1:string){
    this.selectedChoice.emit(P1);
  }

  ngOnInit() {
  }

}
