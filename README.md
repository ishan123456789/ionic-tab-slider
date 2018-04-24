# Ionic tab slider

This is a simple ionic module which will allow you to add images in array to get swipable tabs while this plugin uses simple ionic segments and ionic sliders

## Install

Run `npm install ionic-tab-slider`.

## Using this plugin in an Ionic  app

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import your module
import { IonicTabSliderModule } from 'ionic-module-template';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),

    IonicTabSliderModule // Import this module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```

Then in your page go like this in 
In your `page.component.ts`


```
    public tabs = [
      {
        name: 'Tab 1',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      },
      {
        name: 'Tab 2',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      },
      {
        name: 'Tab 3',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      },
      {
        name: 'Tab 4',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      }
    ]
```    
And in your `page.component.ts`
Add in your `page.component.html`
   `<ionic-tab-slider [tabs]="tabs"></ionic-tab-slider>`
   
## Working example of app

[![Working demo](https://img.youtube.com/vi/rYD1qyoo3zY/0.jpg)](https://www.youtube.com/watch?v=rYD1qyoo3zY)

