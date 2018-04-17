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

    IonicTabSliderModule // Put your module here
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
        name: 'Tab heading 1',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      },
      {
        name: 'Tab heading 2',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      },
      {
        name: 'Tab heading 3',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      },
      {
        name: 'Tab heading 4',
        img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
      }
    ]
    
    ```
And in your `page.component.ts`
Add in your `page.component.html`
   `<ionic-slider-tabs [tabs]="tabs"></ionic-slider-tabs>`
