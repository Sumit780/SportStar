import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportIconsComponent } from './sport-icons.component';

describe('SportIconsComponent', () => {
  let component: SportIconsComponent;
  let fixture: ComponentFixture<SportIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
