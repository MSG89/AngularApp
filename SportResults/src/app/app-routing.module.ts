import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TeamsListComponent} from './teams-list/teams-list.component';
import {MatchResultsComponent} from './match-results/match-results.component';
import {TopFiveOffComponent} from './top-five-off/top-five-off.component'
import {TopFiveDefComponent} from './top-five-def/top-five-def.component'
import {MatchHighlightComponent} from './match-highlight/match-highlight.component'

const routes: Routes = [
  {path:'team-list',component:TeamsListComponent},
  {path:'match-results',component:MatchResultsComponent},
  {path:'top-five-off',component:TopFiveOffComponent},
  {path:'top-five-def',component:TopFiveDefComponent},
  {path:'match-highlight',component:MatchHighlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
