import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRecursiveComponent } from './child-recursive.component';

describe('ChildRecursiveComponent', () => {
  let component: ChildRecursiveComponent;
  let fixture: ComponentFixture<ChildRecursiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRecursiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRecursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
