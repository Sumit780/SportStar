import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSportsComponent } from './star-sports.component';

describe('StarSportsComponent', () => {
  let component: StarSportsComponent;
  let fixture: ComponentFixture<StarSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
