import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FeatureDatasource} from "../datasource/feature-datasource";
import {FeatureTableService} from "../services/feature-table.service";
import {StyleService} from "../../layer/services/style.service";

@Component({
  selector: 'app-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureTableComponent implements OnInit {

  dataSource: FeatureDatasource
  displayedColumns: string[]

  constructor(private featureTableService: FeatureTableService,
              private styleService: StyleService) { }

  ngOnInit(): void {
    this.dataSource = this.featureTableService.featureDataSource
    this.dataSource.getColumnNames().subscribe(columnNames => this.displayedColumns = Array.from(columnNames))
  }

  addHighlight(row) {
    this.styleService.addHighlighting(row)
  }

  removeHighlight(row) {
    this.styleService.removeHighlighting(row)
  }
}
