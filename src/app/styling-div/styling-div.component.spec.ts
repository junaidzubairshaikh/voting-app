import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingDivComponent } from './styling-div.component';

describe('StylingDivComponent', () => {
  let component: StylingDivComponent;
  let fixture: ComponentFixture<StylingDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylingDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
