import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = ['第一行', '第二行'];
  getHeroes(): void {
    this.heroes = ['新第一行', '新第二行', '新第三行'];
  }
  constructor() { }
}
