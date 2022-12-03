import { Injectable } from '@angular/core';
import {Layer} from "ol/layer";
import Map from 'ol/Map';
import {Collection} from "ol";
import BaseLayer from "ol/layer/Base";

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor() { }

  addLayer(layer: Layer, map: Map) {
    map.addLayer(layer)
  }

  getLayers(map: Map): Collection<BaseLayer> {
    return map.getLayers()
  }

}
