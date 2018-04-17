import {Component,ViewChild,Input} from '@angular/core';
import { Slides } from 'ionic-angular';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl:  'ionic-tab-slider.html'
})
export class IonicTabSliderComponent  implements AfterViewInit  {
  @ViewChild(Slides) slides: Slides;
  @Input() tabs: any;
  @Input() imageSlider: boolean;
  public currentSegment;

  text: string;

  constructor() {
    console.log('Hello IonicSliderTabsComponent Component');
    this.text = 'Hello World';
  }
  ngAfterViewInit() {
    this.currentSegment = this.tabs[0].name;
    
  }
  segmentChanged($event) {
    console.log(this.currentSegment);
    console.log($event.value);
    let indexOfItem = null;
    this.tabs.map((item,index)=>{
      if(item.name == $event.value) {
        indexOfItem = index; 
      }
    })    
    this.goToSlide(indexOfItem);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    
    if(this.currentSegment != this.tabs[currentIndex].name) {
      this.currentSegment = this.tabs[currentIndex].name;
    };
  }
  goToSlide(index:any) {
    this.slides.slideTo(+index, 500);
  }
}