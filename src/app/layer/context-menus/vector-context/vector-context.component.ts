import {Component, Input, OnInit} from '@angular/core';
import BaseLayer from "ol/layer/Base";
import {MatDialog} from "@angular/material/dialog";
import {MapService} from "../../../map/services/map.service";
import {OpacityDialogComponent} from "../../opacity-dialog/opacity-dialog.component";
import VectorLayer from "ol/layer/Vector";

@Component({
  selector: 'app-vector-context',
  templateUrl: './vector-context.component.html',
  styleUrls: ['./vector-context.component.css']
})
export class VectorContextComponent implements OnInit {

  @Input() layer: BaseLayer

  constructor(public dialog: MatDialog,
              private mapService: MapService) { }

  ngOnInit(): void {
  }

  openOpacityDialog(): void {
    const dialogRef = this.dialog.open(OpacityDialogComponent, {
      data: this.layer,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  zoomToExtent() {
    this.mapService.fit((this.layer as VectorLayer<any>).getSource().getExtent())
  }


}
