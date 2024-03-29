import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVotationComponent } from './edit-votation.component';

describe('EditVotationComponent', () => {
  let component: EditVotationComponent;
  let fixture: ComponentFixture<EditVotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
