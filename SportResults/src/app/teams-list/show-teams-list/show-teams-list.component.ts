import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-teams-list',
  templateUrl: './show-teams-list.component.html',
  styleUrls: ['./show-teams-list.component.css']
})
export class ShowTeamsListComponent {
  constructor(private service: SharedService) { }

  TeamNamesList: any = [];

  ngOnInit(): void {
    this.refreshTeamNamesList();
  }

  refreshTeamNamesList() {
    this.service.getTeamNames().subscribe(data => {
      this.TeamNamesList = data;
    })
  }

}
