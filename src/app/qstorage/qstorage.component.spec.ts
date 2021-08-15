import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QstorageComponent } from './qstorage.component';

describe('QstorageComponent', () => {
  let component: QstorageComponent;
  let fixture: ComponentFixture<QstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
