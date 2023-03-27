import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCrewComponent } from './circle-crew.component';

describe('CircleCrewComponent', () => {
  let component: CircleCrewComponent;
  let fixture: ComponentFixture<CircleCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleCrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
