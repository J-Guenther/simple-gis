import { Injectable } from '@angular/core';
import {FeatureDatasource} from "../datasource/feature-datasource";

@Injectable({
  providedIn: 'root'
})
export class FeatureTableService {

  featureDataSource: FeatureDatasource

  constructor() {
    this.featureDataSource = new FeatureDatasource([])
  }
}
