import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}
