import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
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
