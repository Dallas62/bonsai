import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBonsaiFormComponent } from './my-bonsai-form.component';

describe('MyBonsaiFormComponent', () => {
  let component: MyBonsaiFormComponent;
  let fixture: ComponentFixture<MyBonsaiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBonsaiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBonsaiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
