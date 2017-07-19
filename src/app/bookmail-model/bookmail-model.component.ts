import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransData } from '../shared/trans-data';
import { TransServiceService } from '../shared/trans-service.service';
import { DemoemailServiceService } from '../shared/demoemail-service.service';
import { Demoemail } from '../shared/demoemail-data';

@Component({
  selector: 'app-bookmail-model',
  templateUrl: './bookmail-model.component.html',
  styleUrls: ['./bookmail-model.component.css']
})
export class BookmailModelComponent implements OnInit {
allTrans:TransData[]=[];
dt=new Date();
x:string;
year:number;
x1:number;
_email:string;
_msg:string;
_sub:string;
alldemoemail:Demoemail[]=[];


  constructor(private _demoemailservice:DemoemailServiceService,private _transServiceService:TransServiceService,private _router:Router) { }

  ngOnInit() {
this.x1=this.dt.getDate();
//this.lastday = (new Date(this.year, this.month+1,1));
//alert(this.lastday);
//this.dt.setDate(this.dt.getDate());
this.x=this.dt.getDate()+"-";
this.x+=(this.dt.getMonth()+1)+"-";
this.x+=this.dt.getFullYear();
alert(this.x);
if(this.x1==25)
{
this._transServiceService.getTransDesc().subscribe(

      (data:TransData[])=>{
        this.allTrans=data;
        console.log(data);
        this._email=this.allTrans[0].user_email_id;
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
  sendemail(item:TransData[])
{
  
  alert(this._email);

    this._msg="your book limit";
  this._sub="about trans request";
   this._demoemailservice.Sendmail(new Demoemail(this._msg,this._email,this._sub)).subscribe(

    (data:any)=>
    {
      alert("mail sent");
    },
    function(error)
    {

    },
    function()
    {
      console.log("mail sent");
    }

  );

}

}
