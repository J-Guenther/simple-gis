import { Injectable } from '@angular/core';
import {LayerService} from "./layer.service";
import {MapService} from "../../map/services/map.service";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private layerService: LayerService,
              private mapService: MapService) { }

  uploadFile(file: File) {
    const reader = new FileReader()
    reader.onload = event => this.processGeoJSON(event.target.result as string, file.name)
    reader.onerror = error => console.error(error)
    reader.readAsText(file, "UTF-8")
  }

  processGeoJSON(jsonString: string, filename: string) {
    const jsonObject = JSON.parse(jsonString)
    const layer = this.layerService.createGeoJSONLayer(jsonObject, filename)
    this.layerService.addLayer(layer, this.mapService.mainMap)
    this.mapService.fit(layer.getSource().getExtent())
  }
}
