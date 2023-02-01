import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveOffComponent } from './top-five-off.component';

describe('TopFiveOffComponent', () => {
  let component: TopFiveOffComponent;
  let fixture: ComponentFixture<TopFiveOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFiveOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFiveOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
