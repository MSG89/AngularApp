import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveDefComponent } from './top-five-def.component';

describe('TopFiveDefComponent', () => {
  let component: TopFiveDefComponent;
  let fixture: ComponentFixture<TopFiveDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFiveDefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFiveDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
