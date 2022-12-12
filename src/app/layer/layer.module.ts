import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerListComponent } from './layer-list/layer-list.component';
import {MatListModule} from "@angular/material/list";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { LayerToolbarComponent } from './layer-toolbar/layer-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { BottomSheetAddLayerComponent } from './bottom-sheet-add-layer/bottom-sheet-add-layer.component';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatMenuModule} from "@angular/material/menu";
import { BasemapContextComponent } from './context-menus/basemap-context/basemap-context.component';
import { OpacityDialogComponent } from './opacity-dialog/opacity-dialog.component';
import {MatSliderModule} from "@angular/material/slider";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";



@NgModule({
  declarations: [
    LayerListComponent,
    LayerToolbarComponent,
    BottomSheetAddLayerComponent,
    BasemapContextComponent,
    OpacityDialogComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatSliderModule,
    MatDialogModule
  ],
  exports: [
    LayerListComponent
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {}},
  ],
})
export class LayerModule { }
