import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopFiveOffComponent } from './show-top-five-off.component';

describe('ShowTopFiveOffComponent', () => {
  let component: ShowTopFiveOffComponent;
  let fixture: ComponentFixture<ShowTopFiveOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTopFiveOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTopFiveOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
