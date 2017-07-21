import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiListComponent } from './bonsai-list.component';

describe('BonsaiListComponent', () => {
  let component: BonsaiListComponent;
  let fixture: ComponentFixture<BonsaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
