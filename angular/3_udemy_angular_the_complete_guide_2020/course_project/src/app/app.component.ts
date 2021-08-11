import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activeView: string = 'recipes';
  title = 'recipe-app';

  onViewSelected(view: string){
    this.activeView =  view;        
  }


}
