import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MapModule} from "./map/map.module";
import {LayerModule} from "./layer/layer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MapModule,
    LayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
