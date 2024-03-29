import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VotationListComponent} from "./modules/voting/votation-list/votation-list.component";
import {EditVotationComponent} from "./modules/voting/edit-votation/edit-votation.component";
import {LogInComponent} from "./modules/authentication/log-in/log-in.component";
import {SignUpComponent} from "./modules/authentication/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    component: LogInComponent,
    title: "Accedi"
  },
  {
    path: "signup",
    component: SignUpComponent,
    title: "Registrati"
  },
  {
    path: "nuovoutente",
    component: SignUpComponent,
    title: "registrati",
  },
  {
    path: 'votazione',
    component: VotationListComponent,
    title: "Votazione"
  },{
    path:'votazione/edit/{id}',
    component: EditVotationComponent,
    title: 'modifica'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
