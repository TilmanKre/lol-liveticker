import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  makeLight(){
    document.documentElement.setAttribute('data-theme', "light")
  }

  makeDark(){
    document.documentElement.setAttribute('data-theme', "dark")
  }
}
