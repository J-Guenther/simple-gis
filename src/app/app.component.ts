import { Component } from '@angular/core';
import Map from 'ol/Map';
import {MapService} from "./map/services/map.service";
import {LayerService} from "./layer/services/layer.service";
import {FeatureTableService} from "./feature/services/feature-table.service";
import {OpenTableService} from "./layer/services/open-table.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleGIS';

  map: Map;

  constructor(private mapService: MapService,
              private layerService: LayerService,
              private openTableService: OpenTableService,
              private featureTableService: FeatureTableService) {
    this.mapService.initializeMap()
    this.map = this.mapService.mainMap
    const basemap = this.layerService.createOSMBaseMapLayer()
    this.layerService.addLayer(basemap, this.map)

    this.openTableService.openTable.subscribe(layer => this.featureTableService.featureDataSource.setData(layer.getSource().getFeatures()))
  }
}
