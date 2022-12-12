import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemapContextComponent } from './basemap-context.component';

describe('BasemapContextComponent', () => {
  let component: BasemapContextComponent;
  let fixture: ComponentFixture<BasemapContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasemapContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasemapContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
