import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {LayerService} from "../services/layer.service";
import {MapService} from "../../map/services/map.service";
import BaseLayer from "ol/layer/Base";

@Component({
  selector: 'app-layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.css']
})
export class LayerListComponent implements OnInit {

  layers: BaseLayer[]

  constructor(private layerService: LayerService,
              private mapService: MapService) {
  }

  ngOnInit(): void {
    const map = this.mapService.mainMap
    this.layers = this.layerService.getLayers(map).getArray().slice().reverse()
    console.log(this.layers)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.layers, event.previousIndex, event.currentIndex);
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].setZIndex(this.layers.length - i)
    }
  }

}
