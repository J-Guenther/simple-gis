import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    FeatureTableComponent
  ],
  exports: [
    FeatureTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class FeatureModule { }
