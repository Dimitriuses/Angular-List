import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventScheduler';
  LChose='events';
  onChoseSwitch(chose:string){
    this.LChose=chose;
  }
}
