import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public slider = new Slider();
  
  constructor() { 
    this.slider.config.loop = true;
    this.slider.config.showPreview = true;
    this.slider.config.transitionDuration = 3;
  }

  ngOnInit() {
    const slideItems = [
      { src: 'https://placeimg.com/600/600/any' },
      { src: 'https://placeimg.com/600/600/nature' },
      { src: 'https://placeimg.com/600/600/sepia' },
      { src: 'https://placeimg.com/600/600/people' },
      { src: 'https://placeimg.com/600/600/tech' }
    ];
 
    this.slider.items = slideItems;
  }

}
