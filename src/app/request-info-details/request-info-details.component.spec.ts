import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInfoDetailsComponent } from './request-info-details.component';

describe('RequestInfoDetailsComponent', () => {
  let component: RequestInfoDetailsComponent;
  let fixture: ComponentFixture<RequestInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestInfoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
