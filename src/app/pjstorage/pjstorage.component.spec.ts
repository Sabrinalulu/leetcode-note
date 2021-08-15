import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjstorageComponent } from './pjstorage.component';

describe('PjstorageComponent', () => {
  let component: PjstorageComponent;
  let fixture: ComponentFixture<PjstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
