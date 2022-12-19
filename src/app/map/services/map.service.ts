import {Injectable} from '@angular/core';
import Map from 'ol/Map';
import {View} from "ol";
import {SimpleGeometry} from "ol/geom";
import {Extent} from "ol/extent";


@Injectable({
  providedIn: 'root'
})
export class MapService {

  readonly mainMap: Map

  constructor() {
    this.mainMap = this.initializeMap()
  }

  initializeMap(): Map {
    return new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      })
    });
  }

  fit(geometryOrExtend: Extent | SimpleGeometry){
    this.mainMap.getView().fit(geometryOrExtend)
  }
}
