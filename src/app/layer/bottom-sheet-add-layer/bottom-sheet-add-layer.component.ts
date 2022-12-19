import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FileService} from "../services/file.service";
import {LayerService} from "../services/layer.service";
import {MapService} from "../../map/services/map.service";

@Component({
  selector: 'app-bottom-sheet-add-layer',
  templateUrl: './bottom-sheet-add-layer.component.html',
  styleUrls: ['./bottom-sheet-add-layer.component.css']
})
export class BottomSheetAddLayerComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetAddLayerComponent>,
              private fileService: FileService,
              private layerService: LayerService,
              private mapService: MapService) {}

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onFileSelected($event: Event) {
    const file:File = ($event.target as HTMLInputElement).files[0];

    if (file) {
      this.fileService.uploadFile(file)
    }
    this._bottomSheetRef.dismiss();
  }

  addBasemap() {
    const layer = this.layerService.createOSMBaseMapLayer()
    this.layerService.addLayer(layer, this.mapService.mainMap)
    this._bottomSheetRef.dismiss();
  }
}
