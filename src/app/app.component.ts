import { Component } from '@angular/core';
import Map from 'ol/Map';
import {MapService} from "./map/services/map.service";
import {LayerService} from "./layer/services/layer.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleGIS';

  map: Map;

  constructor(private mapService: MapService,
              private layerService: LayerService) {
    this.mapService.initializeMap()
    this.map = this.mapService.mainMap
    const basemap = this.layerService.createOSMBaseMapLayer()
    this.layerService.addLayer(basemap, this.map)
  }
}
