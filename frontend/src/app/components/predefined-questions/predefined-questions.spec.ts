import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedQuestions } from './predefined-questions';

describe('PredefinedQuestions', () => {
  let component: PredefinedQuestions;
  let fixture: ComponentFixture<PredefinedQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredefinedQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredefinedQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
