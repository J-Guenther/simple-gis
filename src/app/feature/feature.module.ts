import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import {MatTableModule} from "@angular/material/table";
import { TableToolsComponent } from './table-tools/table-tools.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    FeatureTableComponent,
    TableToolsComponent
  ],
  exports: [
    FeatureTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FeatureModule { }
