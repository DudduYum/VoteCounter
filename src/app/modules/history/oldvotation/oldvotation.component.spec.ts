import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldvotationComponent } from './oldvotation.component';

describe('OldvotationComponent', () => {
  let component: OldvotationComponent;
  let fixture: ComponentFixture<OldvotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldvotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldvotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
