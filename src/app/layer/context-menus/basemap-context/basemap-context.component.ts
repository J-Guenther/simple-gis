import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OpacityDialogComponent} from "../../opacity-dialog/opacity-dialog.component";
import BaseLayer from "ol/layer/Base";
import {MapService} from "../../../map/services/map.service";

@Component({
  selector: 'app-basemap-context',
  templateUrl: './basemap-context.component.html',
  styleUrls: ['./basemap-context.component.css']
})
export class BasemapContextComponent implements OnInit {

  @Input() layer: BaseLayer

  constructor(public dialog: MatDialog) { }

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
}
