import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopFiveDefComponent } from './show-top-five-def.component';

describe('ShowTopFiveDefComponent', () => {
  let component: ShowTopFiveDefComponent;
  let fixture: ComponentFixture<ShowTopFiveDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTopFiveDefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTopFiveDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
