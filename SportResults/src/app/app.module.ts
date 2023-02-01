import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { TopFiveOffComponent } from './top-five-off/top-five-off.component';
import { TopFiveDefComponent } from './top-five-def/top-five-def.component';
import { MatchHighlightComponent } from './match-highlight/match-highlight.component';

import { ShowMatchHighComponent } from './match-highlight/show-match-high/show-match-high.component';
import { ShowMatchResComponent } from './match-results/show-match-res/show-match-res.component';
import { ShowTeamsListComponent } from './teams-list/show-teams-list/show-teams-list.component';
import { ShowTopFiveDefComponent } from './top-five-def/show-top-five-def/show-top-five-def.component';
import { ShowTopFiveOffComponent } from './top-five-off/show-top-five-off/show-top-five-off.component';

import {SharedService} from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    MatchResultsComponent,
    TopFiveOffComponent,
    TopFiveDefComponent,
    MatchHighlightComponent,
    ShowMatchHighComponent,
    ShowMatchResComponent,
    ShowTeamsListComponent,
    ShowTopFiveDefComponent,
    ShowTopFiveOffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
