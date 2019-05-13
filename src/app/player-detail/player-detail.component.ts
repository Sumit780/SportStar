import { ApiHandleService } from './../api-handle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  myurl = 'http://advjavaapp-env.imadbprai6.us-west-2.elasticbeanstalk.com/sporticons/stars';
   playerDetail: any;
   SinglePlayerData: any;
   id: any;

   getId(){
     this.route.paramMap.subscribe(params => {
       this.id = params.get('id');
     });
     let playerId = this.playerDetail.find(item => item.id = this.id);
     this.SinglePlayerData=playerId;
   }

  constructor(private apiHandleService: ApiHandleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.apiHandleService.getData(this.myurl).subscribe(resp => {
    this.playerDetail = resp;
    console.log('playerDetail',this.playerDetail)
    this.getId();
    });

  }

}
