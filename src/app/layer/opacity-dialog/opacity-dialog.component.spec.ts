import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpacityDialogComponent } from './opacity-dialog.component';

describe('OpacityComponent', () => {
  let component: OpacityDialogComponent;
  let fixture: ComponentFixture<OpacityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpacityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpacityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
