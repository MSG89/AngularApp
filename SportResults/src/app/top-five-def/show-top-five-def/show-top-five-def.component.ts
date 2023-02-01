import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-top-five-def',
  templateUrl: './show-top-five-def.component.html',
  styleUrls: ['./show-top-five-def.component.css']
})
export class ShowTopFiveDefComponent {
  constructor(private service: SharedService) { }

  MatchList: any = [];

  ngOnInit(): void {
    this.refreshMatchList();
  }

  refreshMatchList() {
    this.service.getTopFiveDefTeams().subscribe(data => {
      this.MatchList = data;
    })
  }
}
