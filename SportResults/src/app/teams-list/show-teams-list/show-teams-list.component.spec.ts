import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeamsListComponent } from './show-teams-list.component';

describe('ShowTeamsListComponent', () => {
  let component: ShowTeamsListComponent;
  let fixture: ComponentFixture<ShowTeamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTeamsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
