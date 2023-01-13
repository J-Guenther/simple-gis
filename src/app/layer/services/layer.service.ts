import { Injectable } from '@angular/core';
import {Layer} from "ol/layer";
import Map from 'ol/Map';
import {Collection} from "ol";
import BaseLayer from "ol/layer/Base";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {GeoJSON} from "ol/format";
import {StyleService} from "./style.service";
import {BehaviorSubject, Subject} from "rxjs";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  layerChange: Subject<boolean> = new BehaviorSubject<boolean>(true)

  constructor(private styleService: StyleService) { }

  addLayer(layer: Layer, map: Map) {
    map.addLayer(layer)
    // TODO make Enum-Events like ADD, UPDATE, DELETE, etc.
    this.layerChange.next(true)
  }

  getLayers(map: Map): Collection<BaseLayer> {
    return map.getLayers()
  }

  removeLayer(layer: Layer, map: Map) {
    const removedLayer = map.removeLayer(layer)
    if (removedLayer) {
      this.layerChange.next(true)
    } else {
      console.error(layer.get('title') + " could not be removed")
    }
  }

  createGeoJSONLayer(jsonObject: object, title: string): VectorLayer<any> {
    const vectorSource = new VectorSource({
      features: new GeoJSON({
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      }).readFeatures(jsonObject),
    });

    console.log(vectorSource.getFeatures()[0].getKeys())

    return new VectorLayer({
      source: vectorSource,
      style: this.styleService.styleFunction,
      properties: {
        'title': title,
        // TODO make layerType Enum
        'layerType': 'vector'
      }
    });
  }

  createOSMBaseMapLayer(): TileLayer<any> {
    return new TileLayer({
      source: new OSM(),
      properties: {
        'title': 'OSM BaseMap',
        'layerType': 'basemap'
      }
    })
  }

}
