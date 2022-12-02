import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetAddLayerComponent } from './bottom-sheet-add-layer.component';

describe('BottomSheetAddLayerComponent', () => {
  let component: BottomSheetAddLayerComponent;
  let fixture: ComponentFixture<BottomSheetAddLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetAddLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetAddLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
