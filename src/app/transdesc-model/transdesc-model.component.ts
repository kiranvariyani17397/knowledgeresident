import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransData } from '../shared/trans-data';
import { TransServiceService } from '../shared/trans-service.service';

@Component({
  selector: 'app-transdesc-model',
  templateUrl: './transdesc-model.component.html',
  styleUrls: ['./transdesc-model.component.css']
})
export class TransdescModelComponent implements OnInit {

allTrans:TransData[]=[];
allTrans1:TransData[]=[];
allTrans2:TransData[]=[];
allTrans3:TransData[]=[];


dt=new Date();
  x:string;
  x1:string;
  constructor(private _transServiceService:TransServiceService,private _router:Router) { }

  ngOnInit() {
//this.dt.setDate(this.dt.getDate() + 50);
//alert(this.dt);
this.x=this.dt.getDate()+"-";
this.x+=(this.dt.getMonth()+1)+"-";
this.x+=this.dt.getFullYear();

this.x1=(this.dt.getDate()-1)+"-";
this.x1+=(this.dt.getMonth()+1)+"-";
this.x1+=this.dt.getFullYear();


this._transServiceService.getAllTransRequest(this.x).subscribe(

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

this._transServiceService.getAllTransReturn(this.x).subscribe(

      (data:TransData[])=>{
        this.allTrans1=data;
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


this._transServiceService.getAllTransRequest(this.x1).subscribe(

      (data:TransData[])=>{
        this.allTrans2=data;
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

this._transServiceService.getAllTransReturn(this.x1).subscribe(

      (data:TransData[])=>{
        this.allTrans3=data;
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
