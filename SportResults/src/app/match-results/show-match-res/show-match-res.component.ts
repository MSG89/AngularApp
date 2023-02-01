import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-match-res',
  templateUrl: './show-match-res.component.html',
  styleUrls: ['./show-match-res.component.css']
})
export class ShowMatchResComponent {
  constructor(private service: SharedService) { }

  MatchList: any = [];

  ngOnInit(): void {
    this.refreshMatchList();
  }

  refreshMatchList() {
    this.service.getMatchResults().subscribe(data => {
      this.MatchList = data;
    })
  }
}
