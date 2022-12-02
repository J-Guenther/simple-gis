import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomSheetAddLayerComponent} from "../bottom-sheet-add-layer/bottom-sheet-add-layer.component";

@Component({
  selector: 'app-layer-toolbar',
  templateUrl: './layer-toolbar.component.html',
  styleUrls: ['./layer-toolbar.component.css']
})
export class LayerToolbarComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetAddLayerComponent, {
      panelClass: "dark-foreground"
    });
  }

}
