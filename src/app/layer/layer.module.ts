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



@NgModule({
  declarations: [
    LayerListComponent,
    LayerToolbarComponent,
    BottomSheetAddLayerComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule
  ],
  exports: [
    LayerListComponent
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }
  ],
})
export class LayerModule { }
