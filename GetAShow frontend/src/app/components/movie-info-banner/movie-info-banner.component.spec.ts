import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoBannerComponent } from './movie-info-banner.component';

describe('MovieInfoBannerComponent', () => {
  let component: MovieInfoBannerComponent;
  let fixture: ComponentFixture<MovieInfoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInfoBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
