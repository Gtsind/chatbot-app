import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseContainer } from './response-container';

describe('ResponseContainer', () => {
  let component: ResponseContainer;
  let fixture: ComponentFixture<ResponseContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
