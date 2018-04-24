import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MyProvider } from './providers/my-provider';
import {IonicModule} from 'ionic-angular';
import { IonicTabSliderComponent } from './components/ionic-tab-slider';

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
export class IonicTabSliderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicTabSliderModule,
      providers: [ MyProvider ]
    };
  }
}

