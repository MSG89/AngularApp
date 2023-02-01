import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHighlightComponent } from './match-highlight.component';

describe('MatchHighlightComponent', () => {
  let component: MatchHighlightComponent;
  let fixture: ComponentFixture<MatchHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
