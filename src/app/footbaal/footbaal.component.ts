import { ApiHandleService } from './../api-handle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footbaal',
  templateUrl: './footbaal.component.html',
  styleUrls: ['./footbaal.component.css']
})
export class FootbaalComponent implements OnInit {
  myurl = 'http://advjavaapp-env.imadbprai6.us-west-2.elasticbeanstalk.com/sporticons/stars';
  sports: any[];
  footballData: any[];
  constructor(private apiHandleService: ApiHandleService) { }
findFootball() {
  this.footballData = this.sports.filter(item => {
    return item.sport === 'Football';

  })

}


  ngOnInit() {
    this.apiHandleService.getData(this.myurl).subscribe(resp=>{
      this.sports = resp;
      console.log(typeof this.sports)

      this.findFootball();
    })
  }

}
