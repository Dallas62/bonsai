import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiDetailComponent } from './bonsai-detail.component';

describe('BonsaiDetailComponent', () => {
  let component: BonsaiDetailComponent;
  let fixture: ComponentFixture<BonsaiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsaiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
