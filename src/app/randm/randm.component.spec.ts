import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandmComponent } from './randm.component';

describe('RandmComponent', () => {
  let component: RandmComponent;
  let fixture: ComponentFixture<RandmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandmComponent]
    });
    fixture = TestBed.createComponent(RandmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
