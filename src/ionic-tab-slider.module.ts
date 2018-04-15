import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicTabSliderComponent } from './components/ionic-tab-slider';
// import { MyProvider } from './providers/my-provider';
import {IonicModule} from 'ionic-angular';
@NgModule({
  imports:[
    IonicModule
  ],
  declarations: [
    // declare all components that your module uses
    IonicTabSliderComponent
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    IonicTabSliderComponent
  ]
})
export class IonicTabSlider {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicTabSlider,
      providers: [  ]
    };
  }
}

