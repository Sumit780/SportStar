import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbaalComponent } from './footbaal.component';

describe('FootbaalComponent', () => {
  let component: FootbaalComponent;
  let fixture: ComponentFixture<FootbaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootbaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
