import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FineData } from '../shared/fine-data';
import { FineServiceService } from '../shared/fine-service.service';
import { Subscription } from 'rxjs/Rx';
import { FinejointData } from '../shared/finejoint-data';


@Component({
  selector: 'app-addfine',
  templateUrl: './addfine.component.html',
  styleUrls: ['./addfine.component.css']
})
export class AddfineComponent implements OnInit {

public _subscription:Subscription;
public _pk_fine_id:number;
public _fine_type:number;
public _fine_amount:number;
public _fine_actual_r_date:string;
public _fk_book_id:number;
public _fk_user_id:number;
addFine:FineData[]=[];
addFineJoin:FinejointData[]=[];


  constructor(public _fineServiceService:FineServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {
this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_fine_id=params["pk_fine_id"];
    }

  );

  if(this._pk_fine_id==0)
  {
    this._fineServiceService.getFineById(this._pk_fine_id).subscribe(

      (data:FineData[])=>{
        this.addFine=data;
        this._fine_type=this.addFine[0].fine_type;
        this._fine_amount=this.addFine[0].fine_amount;
        this._fine_actual_r_date=this.addFine[0].fine_actual_r_date;
        this._fk_book_id=this.addFine[0].fk_book_id;
        this._fk_user_id=this.addFine[0].fk_user_id;
      }
    );
  }
  else{
  this._fineServiceService.getFineById(this._pk_fine_id).subscribe(

      (data:FineData[])=>{
          this.addFine=data;
          this._fine_type=this.addFine[0].fine_type;
        this._fine_amount=this.addFine[0].fine_amount;
        this._fine_actual_r_date=this.addFine[0].fine_actual_r_date;
        this._fk_book_id=this.addFine[0].fk_book_id;
        this._fk_user_id=this.addFine[0].fk_user_id;
      }

  );
  }


  }

addfine()
{

if(this._pk_fine_id==0)
{
  this._fineServiceService.addFine(new FineData(this._pk_fine_id,this._fine_type,this._fine_amount,this._fine_actual_r_date,this._fk_book_id,this._fk_user_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allFine']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add fine");
    }

  );
}


else{

  
  this._fineServiceService.updateFine(new FineData(this._pk_fine_id,this._fine_type,this._fine_amount,this._fine_actual_r_date,this._fk_book_id,this._fk_user_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allFine']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated Fine");
    }

  );
}
}


}
