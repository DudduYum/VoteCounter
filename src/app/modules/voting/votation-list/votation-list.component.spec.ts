import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotationListComponent } from './votation-list.component';

describe('VotationListComponent', () => {
  let component: VotationListComponent;
  let fixture: ComponentFixture<VotationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VotationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
