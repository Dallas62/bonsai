import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiCardListComponent } from './bonsai-card-list.component';

describe('BonsaiCardListComponent', () => {
  let component: BonsaiCardListComponent;
  let fixture: ComponentFixture<BonsaiCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsaiCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaiCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
