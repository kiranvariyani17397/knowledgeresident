import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacjoinData } from '../shared/pacjoin-data';
import { PacData } from '../shared/pac-data';
import { PacServiceService } from '../shared/pac-service.service';
import { DemoemailServiceService } from '../shared/demoemail-service.service';
import { Demoemail } from '../shared/demoemail-data';



@Component({
  selector: 'app-pacmail-model',
  templateUrl: './pacmail-model.component.html',
  styleUrls: ['./pacmail-model.component.css']
})
export class PacmailModelComponent implements OnInit {

allPacJoin:PacjoinData[]=[];
allPac:PacData[]=[];
delarr:PacjoinData[]=[];
i:number;
dt=new Date();
x:string;
_email:string;
_msg:string;
_sub:string;
alldemoemail:Demoemail[]=[];




  constructor(private _demoemailservice:DemoemailServiceService,private _pacServiceService:PacServiceService,private _router:Router) { }

  ngOnInit() {

this.x=(this.dt.getDate()+3)+"-";
this.x+=(this.dt.getMonth()+1)+"-";
this.x+=this.dt.getFullYear();
alert(this.x);
        this._pacServiceService.getPacByDate(this.x).subscribe(
      (data:PacjoinData[])=>{
          this.allPacJoin=data;          
          this._email=this.allPacJoin[0].user_email_id;
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('done');
      }
    );

  }


  sendemail()
{
  
  alert(this._email);

    this._msg="your pac is going to expire";
  this._sub="about Pac";
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
