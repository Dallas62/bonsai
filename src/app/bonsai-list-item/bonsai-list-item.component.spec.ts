import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiListItemComponent } from './bonsai-list-item.component';

describe('BonsaiListItemComponent', () => {
  let component: BonsaiListItemComponent;
  let fixture: ComponentFixture<BonsaiListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsaiListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaiListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
