import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CityData } from '../shared/city-data';
import { CityServiceService } from '../shared/city-service.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

public _subscription:Subscription;
public _pk_city_id:number;
public _city_name:string;
public _fk_state_id:number;
addCity:CityData[]=[];
  constructor(public _cityservice:CityServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {

  this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_city_id=params["pk_city_id"];
    }

  );

  if(this._pk_city_id==0)
  {
    this._cityservice.getAllCityById(this._pk_city_id).subscribe(

      (data:CityData[])=>{
        this.addCity=data;
        this._city_name=this.addCity[0].city_name;
        this._fk_state_id=this.addCity[0].fk_state_id;
      }
    );
  }
  else{
  this._cityservice.getAllCityById(this._pk_city_id).subscribe(

      (data:CityData[])=>{
          this.addCity=data;
          this._city_name=this.addCity[0].city_name;
          this._fk_state_id=this.addCity[0].fk_state_id;
      }

  );
  }
  }

addcity()
{

if(this._pk_city_id==0)
{
  this._cityservice.addCity(new CityData(this._pk_city_id,this._city_name,this._fk_state_id )).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allCity']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add city");
    }

  );
}


else{

  this._cityservice.updateCity(new CityData(this._pk_city_id,this._city_name,this._fk_state_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allCity']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated city");
    }

  );
}
}
}











