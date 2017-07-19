import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DonateData } from '../shared/donate-data';
import { DonatejoinData } from '../shared/donatejoin-data';
import { DonateServiceService } from '../shared/donate-service.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-adddonate',
  templateUrl: './adddonate.component.html',
  styleUrls: ['./adddonate.component.css']
})
export class AdddonateComponent implements OnInit {
public _subscription:Subscription;
public _pk_donate_id:number;
public _donate_book_name:string;
public _donate_descr:String;
public _donate_type:number=0;
public _fk_user_id:number=1;


addDonate:DonateData[]=[];
addDonatejoin:DonatejoinData[]=[];

  constructor(private _donateService:DonateServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {
       this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_donate_id=params["pk_donate_id"];
    }

  );

  if(this._pk_donate_id==0)
  {
    console.log("add");
    this._donateService.getDonateBookById(this._pk_donate_id).subscribe(

      (data:DonateData[])=>{
        this.addDonate=data;
        this._donate_book_name=this.addDonate[0].donate_book_name;
        this._donate_descr=this.addDonate[0].donate_descr;
        

      }
    );
  }
  else{
console.log("update");
       this._donateService.getDonateBookById(this._pk_donate_id).subscribe(

      (data:DonateData[])=>{
        this.addDonate=data;
        this._donate_book_name=this.addDonate[0].donate_book_name;
        this._donate_descr=this.addDonate[0].donate_descr;
        

      }
    );
  }
  }


adddonate()
{

if(this._pk_donate_id==0)
{
  this._donateService.addDonateBook(new DonateData(this._pk_donate_id,this._donate_book_name,this._donate_descr,this._donate_type,this._fk_user_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allDonate']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add donate");
    }

  );
}


else{

  
  this._donateService.updateDonateBook(new DonateData(this._pk_donate_id,this._donate_book_name,this._donate_descr,this._donate_type,this._fk_user_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allDonate']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated Donate");
    }

  );
}
}


}
