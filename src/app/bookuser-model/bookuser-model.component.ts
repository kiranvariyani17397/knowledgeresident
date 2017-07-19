import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransData } from '../shared/trans-data';
import { TransServiceService } from '../shared/trans-service.service';

@Component({
  selector: 'app-bookuser-model',
  templateUrl: './bookuser-model.component.html',
  styleUrls: ['./bookuser-model.component.css']
})
export class BookuserModelComponent implements OnInit {
allTrans:TransData[]=[];
  constructor(private _transServiceService:TransServiceService,private _router:Router) { }

  ngOnInit() {
this._transServiceService.getTransJoin().subscribe(

      (data:TransData[])=>{
        this.allTrans=data;
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("view Transaction");
      }
    );

  }

}
