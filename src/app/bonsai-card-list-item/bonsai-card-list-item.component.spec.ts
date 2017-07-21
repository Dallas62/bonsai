import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiCardListItemComponent } from './bonsai-card-list-item.component';

describe('BonsaiCardListItemComponent', () => {
  let component: BonsaiCardListItemComponent;
  let fixture: ComponentFixture<BonsaiCardListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsaiCardListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaiCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
