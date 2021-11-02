import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffincompany';

  //thanh navbar
  navbarfixed:boolean = false;
  listfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onScroll(){
    if(window.scrollY > 50)
    {
      this.navbarfixed = true;
      this.listfixed = true;
    }
    else
    {
      this.navbarfixed = false;
      this.listfixed = false;
    }
  }

}
