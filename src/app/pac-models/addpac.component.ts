import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PacData } from '../shared/pac-data';
import { PacjoinData } from '../shared/pacjoin-data';
import { PacServiceService } from '../shared/pac-service.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-addpac',
  templateUrl: './addpac.component.html',
  styleUrls: ['./addpac.component.css']
})
export class AddpacComponent implements OnInit {


public _subscription:Subscription;
public _pk_pac_id:number;
public _pac_name:string;
public _pac_amount:number;
public _pac_desc:string;
public _pac_deposit:number;
public _pac_expr_date:string="";
public _pac_or_date:string="";
public _fk_user_id:number=1;
addPac:PacData[]=[];
allPacJoin:PacjoinData[]=[];

  constructor(private _pacService:PacServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {

this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_pac_id=params["pk_pac_id"];
    }

  );

  if(this._pk_pac_id==0)
  {
    console.log("add");
    this._pacService.getPacById(this._pk_pac_id).subscribe(

      (data:PacData[])=>{
        this.addPac=data;
        this._pac_name=this.addPac[0].pac_name;
        this._pac_amount=this.addPac[0].pac_amount;
        this._pac_desc=this.addPac[0].pac_desc;
        this._pac_deposit=this.addPac[0].pac_deposit;
        

      }
    );
  }
  else{
console.log("update");
     this._pacService.getPacById(this._pk_pac_id).subscribe(

      (data:PacData[])=>{
        this.addPac=data;
        this._pac_name=this.addPac[0].pac_name;
        this._pac_amount=this.addPac[0].pac_amount;
        this._pac_desc=this.addPac[0].pac_desc;
        this._pac_deposit=this.addPac[0].pac_deposit;
        

      }
    );
  }

  }


addpac()
{

if(this._pk_pac_id==0)
{
        console.log("add Pac abc");
  this._pacService.addPac(new PacData(this._pk_pac_id,this._pac_name,this._pac_amount,this._pac_desc,this._pac_deposit)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allPac']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add Pac");
    }

  );
}


else{

  
  this._pacService.addPac(new PacData(this._pk_pac_id,this._pac_name,this._pac_amount,this._pac_desc,this._pac_deposit)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allPac']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated Pac");
    }

  );
}
}

}
