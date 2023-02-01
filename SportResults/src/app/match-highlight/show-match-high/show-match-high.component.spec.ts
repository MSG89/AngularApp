import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatchHighComponent } from './show-match-high.component';

describe('ShowMatchHighComponent', () => {
  let component: ShowMatchHighComponent;
  let fixture: ComponentFixture<ShowMatchHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMatchHighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMatchHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
