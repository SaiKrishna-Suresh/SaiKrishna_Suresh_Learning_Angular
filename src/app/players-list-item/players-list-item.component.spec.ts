import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListItemComponent } from './players-list-item.component';

describe('ContentListItemComponent', () => {
  let component: PlayersListItemComponent;
  let fixture: ComponentFixture<PlayersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
