import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableInfoComponent } from './edit-table-info.component';

describe('EditTableInfoComponent', () => {
  let component: EditTableInfoComponent;
  let fixture: ComponentFixture<EditTableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
