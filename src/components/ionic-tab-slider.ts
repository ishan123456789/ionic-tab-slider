import {Component,ViewChild,Input} from '@angular/core';
import { Slides } from 'ionic-angular';
import { AfterViewInit } from '@angular/core';
const templateToShow = `
<div padding>
    <ion-segment [(ngModel)]="currentSegment" (ionChange)="segmentChanged($event)">
        <ion-segment-button [value]="tab.name" class="is-dark" *ngFor="let tab of tabs;let i = index;">
            {{tab.name}}
        </ion-segment-button>
    </ion-segment>
</div>
<ion-grid class="slider-content">
    <ion-row>
        <ion-slides (ionSlideDidChange)="slideChanged()">
            <ion-slide *ngFor="let tab of tabs;let i = index;let last = last;">
                <ion-list class="list">
                    <ion-item class="margin-top item-home-restaurant">
                        <img [src]="tab.img" alt="">
                    </ion-item>
                </ion-list>
            </ion-slide>
        </ion-slides>
    </ion-row>
</ion-grid>
`;
@Component({
  selector: 'ionic-tab-slider',
  template:  templateToShow
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