import {Injectable} from '@angular/core';
import Map from 'ol/Map';
import {View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import OGCMapTile from "ol/source/OGCMapTile";
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
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
          properties: {
            'title': 'OSM BaseMap',
            'layerType': 'basemap'
          }
        }),
        new TileLayer({
          source: new OGCMapTile({
            url: 'https://maps.ecere.com/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad'
          }),
          properties: {
            'title': 'Other BaseMap',
            'layerType': 'basemap'
          }
        })
      ]
    });
  }

  fit(geometryOrExtend: Extent | SimpleGeometry){
    this.mainMap.getView().fit(geometryOrExtend)
  }
}
