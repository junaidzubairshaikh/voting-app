import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorConcatComponent } from './operator-concat.component';

describe('OperatorConcatComponent', () => {
  let component: OperatorConcatComponent;
  let fixture: ComponentFixture<OperatorConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorConcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
