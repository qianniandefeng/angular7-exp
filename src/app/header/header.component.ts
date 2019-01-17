import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private searchName;
  togo = function () {
    console.log(this.searchName);
    alert(this.searchName);
  }
  constructor() { }
  ngOnInit() {
  }
}
