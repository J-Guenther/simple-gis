import { Component, OnInit } from '@angular/core';
import {FeatureTableService} from "../services/feature-table.service";

@Component({
  selector: 'app-table-tools',
  templateUrl: './table-tools.component.html',
  styleUrls: ['./table-tools.component.css']
})
export class TableToolsComponent implements OnInit {

  constructor(private featureTableService: FeatureTableService) { }

  ngOnInit(): void {
  }

  closeTable() {
    this.featureTableService.featureDataSource.setData([])
  }
}
