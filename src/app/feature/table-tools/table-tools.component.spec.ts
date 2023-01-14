import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToolsComponent } from './table-tools.component';

describe('TableToolsComponent', () => {
  let component: TableToolsComponent;
  let fixture: ComponentFixture<TableToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
