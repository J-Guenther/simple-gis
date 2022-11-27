import { Component } from '@angular/core';
import Map from 'ol/Map';
import {View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleGIS';

  map: Map;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ]
    });
  }
}
