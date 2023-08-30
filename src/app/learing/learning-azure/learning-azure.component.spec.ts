import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAzureComponent } from './learning-azure.component';

describe('LearningAzureComponent', () => {
  let component: LearningAzureComponent;
  let fixture: ComponentFixture<LearningAzureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningAzureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
