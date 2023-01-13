import {EventEmitter, Injectable} from '@angular/core';
import VectorLayer from "ol/layer/Vector";

@Injectable({
  providedIn: 'root'
})
export class OpenTableService {

  openTable: EventEmitter<VectorLayer<any>> = new EventEmitter<VectorLayer<any>>()

  constructor() { }
}
