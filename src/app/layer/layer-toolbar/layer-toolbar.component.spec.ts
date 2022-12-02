import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerToolbarComponent } from './layer-toolbar.component';

describe('LayerToolbarComponent', () => {
  let component: LayerToolbarComponent;
  let fixture: ComponentFixture<LayerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
