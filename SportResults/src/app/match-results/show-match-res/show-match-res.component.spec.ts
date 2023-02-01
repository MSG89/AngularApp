import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatchResComponent } from './show-match-res.component';

describe('ShowMatchResComponent', () => {
  let component: ShowMatchResComponent;
  let fixture: ComponentFixture<ShowMatchResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMatchResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMatchResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
