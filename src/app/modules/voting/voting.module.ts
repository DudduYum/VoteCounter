import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotationListComponent } from './votation-list/votation-list.component';
import { EditVotationComponent } from './edit-votation/edit-votation.component';

@NgModule({
  declarations: [
    VotationListComponent,
    EditVotationComponent
  ],
  exports: [
    VotationListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VotingModule { }
