import { Component } from '@angular/core';
import Map from 'ol/Map';
import {MapService} from "./map/services/map.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleGIS';

  map: Map;

  constructor(private mapService: MapService) {
    this.mapService.initializeMap()
    this.map = this.mapService.mainMap
  }
}
