import {DataSource} from "@angular/cdk/collections";
import {Observable, ReplaySubject} from "rxjs";
import {Feature} from "ol";

export class FeatureDatasource extends DataSource<Feature> {
  private _dataStream = new ReplaySubject<Feature[]>()
  private _columnNames = new ReplaySubject<Set<string>>()
  hasData = false

  constructor(initialData: Feature[]) {
    super();
    this.setData(initialData)
  }

  connect(): Observable<Feature[]> {
    return this._dataStream
  }

  disconnect() {

  }

  setData(data: Feature[]) {
    this._dataStream.next(data)
    const columnNames = new Set(data.map(value => value.getKeys()).flat())
    columnNames.delete("geometry")
    this._columnNames.next(columnNames)
    this.hasData = columnNames.size > 0
  }

  getColumnNames(): Observable<Set<string>> {
    return this._columnNames
  }
}
