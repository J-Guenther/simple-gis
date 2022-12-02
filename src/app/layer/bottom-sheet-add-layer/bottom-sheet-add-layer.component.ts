import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-bottom-sheet-add-layer',
  templateUrl: './bottom-sheet-add-layer.component.html',
  styleUrls: ['./bottom-sheet-add-layer.component.css']
})
export class BottomSheetAddLayerComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetAddLayerComponent>) {}

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
