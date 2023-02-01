import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-match-high',
  templateUrl: './show-match-high.component.html',
  styleUrls: ['./show-match-high.component.css']
})
export class ShowMatchHighComponent {
  constructor(private service: SharedService) { }

  MatchList: any = [];

  ngOnInit(): void {
    this.refreshHighlightMatch();
  }

  refreshHighlightMatch() {
    this.service.getHighlightMatch().subscribe(data => {
      this.MatchList = data;
    })
  }
}

