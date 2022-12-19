import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorContextComponent } from './vector-context.component';

describe('VectorContextComponent', () => {
  let component: VectorContextComponent;
  let fixture: ComponentFixture<VectorContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
