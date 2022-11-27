import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import Map from 'ol/Map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements AfterViewInit {

  @Input() map: Map;
  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.map.setTarget(this.elementRef.nativeElement);
    this.map.updateSize()
  }

}
