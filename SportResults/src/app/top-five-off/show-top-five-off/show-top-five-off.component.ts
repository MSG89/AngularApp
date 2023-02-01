import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-top-five-off',
  templateUrl: './show-top-five-off.component.html',
  styleUrls: ['./show-top-five-off.component.css']
})
export class ShowTopFiveOffComponent {
  constructor(private service: SharedService) { }

  MatchList: any = [];

  ngOnInit(): void {
    this.refreshMatchList();
  }

  refreshMatchList() {
    this.service.getTopFiveOffTeams().subscribe(data => {
      this.MatchList = data;
    })
  }
}
