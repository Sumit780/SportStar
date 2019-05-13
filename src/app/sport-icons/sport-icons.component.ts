import { ApiHandleService } from './../api-handle.service';
import { Component, OnInit } from '@angular/core';
import { Sportsclasss } from '../sportsclasss';

@Component({
  selector: 'app-sport-icons',
  templateUrl: './sport-icons.component.html',
  styleUrls: ['./sport-icons.component.css']
})
export class SportIconsComponent implements OnInit {

  myurl = 'http://advjavaapp-env.imadbprai6.us-west-2.elasticbeanstalk.com/sporticons/stars';

  constructor(private apiHandleService: ApiHandleService) { }
sportsPlayer: string[];

  ngOnInit() {
   this.apiHandleService.getData(this.myurl).subscribe(resp => {
     this.sportsPlayer = resp;
   });

  }

}
