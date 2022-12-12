import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import BaseLayer from "ol/layer/Base";

@Component({
  selector: 'app-opacity-dialog',
  templateUrl: './opacity-dialog.component.html',
  styleUrls: ['./opacity-dialog.component.css']
})
export class OpacityDialogComponent {

  initialOpacity: number

  formatLabel(value: number) {
    return value * 100 + '%';
  }

  constructor(
    public dialogRef: MatDialogRef<OpacityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseLayer,
  ) {
    this.initialOpacity = data.getOpacity()
    console.log(this.initialOpacity)
  }

  onNoClick(): void {
    this.data.setOpacity(this.initialOpacity);
    this.dialogRef.close();
  }

}
