import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsExampleComponent } from './operators-example.component';

describe('OperatorsExampleComponent', () => {
  let component: OperatorsExampleComponent;
  let fixture: ComponentFixture<OperatorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
