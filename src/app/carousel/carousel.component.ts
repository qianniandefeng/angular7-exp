import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
// step2.定义三张图片
  private img1: Img;
  private img2: Img;
  private img3: Img;

  constructor() { }

  // step3.然后初始化图片
  ngOnInit() {
    this.img1 = new Img('../assets/1.jpg', '图片一');
    this.img2 = new Img('../assets/2.jpg', '图片二');
    this.img3 = new Img('../assets/3.jpg', '图片三');

  }
}
// step1.定义轮播的图片对象
export class Img {
  constructor(
    public imgSrc: String,
    public imgAlt: String
  ) {

  }
}
