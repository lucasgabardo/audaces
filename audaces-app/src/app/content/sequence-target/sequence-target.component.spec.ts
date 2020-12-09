import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceTargetComponent } from './sequence-target.component';

describe('SequenceTargetComponent', () => {
  let component: SequenceTargetComponent;
  let fixture: ComponentFixture<SequenceTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
