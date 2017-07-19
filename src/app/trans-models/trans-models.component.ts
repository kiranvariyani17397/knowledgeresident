import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransData } from '../shared/trans-data';
import { TransServiceService } from '../shared/trans-service.service';


@Component({
  selector: 'app-trans-models',
  templateUrl: './trans-models.component.html',
  styleUrls: ['./trans-models.component.css']
})
export class TransModelsComponent implements OnInit {
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

deleteTrans(item:TransData)
  {
    this._transServiceService.deleteTrans(item.pk_trans_id).subscribe(
      (data:any)=>{

        this.allTrans.splice(this.allTrans.indexOf(item),1);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("delete Transation");
      }


    );
  }


}
