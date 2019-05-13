import { ApiHandleService } from './../api-handle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  myurl = 'http://advjavaapp-env.imadbprai6.us-west-2.elasticbeanstalk.com/sporticons/stars';

  cricketData: any[];
  cricketFilteredData: any[];
  constructor(private apiHandleService: ApiHandleService) { }
  filterCricket() {
  console.log('cricket',this.cricketData);
  this.cricketFilteredData = this.cricketData.filter(item => item.sport === 'Cricket')

  }

  ngOnInit() {
    this.apiHandleService.getData(this.myurl).subscribe(resp =>{
      this.cricketData = resp;
      console.log('cricket', this.cricketData);
      this.filterCricket();
    });

  }

}
