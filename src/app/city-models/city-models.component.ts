import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityData } from '../shared/city-data';
import { CityServiceService } from '../shared/city-service.service';


@Component({
  selector: 'app-city-models',
  templateUrl: './city-models.component.html',
  styleUrls: ['./city-models.component.css']
})
export class CityModelsComponent implements OnInit {
allCity:CityData[]=[];
i:number;
delarr:CityData[]=[];
  constructor(private _cityservice:CityServiceService,private _router:Router) { }

  ngOnInit() {

    this._cityservice.getAllCity().subscribe(
      (data:CityData[])=>{
        this.allCity=data;
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("city view");
      }

    );
  }


onCheck(item:CityData)
{
  console.log("oncheck");
  
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);  
    }
    else{
      this.delarr.push(item);
    }
  
   console.log(this.delarr);
}

  deleteCity(item:CityData)
  {
    this._cityservice.deleteCity(item.pk_city_id).subscribe(

      (data:any)=>{
        this.allCity.splice(this.allCity.indexOf(item),1);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("city delete");
      }
    );
  }

deleteAllCity()
    {
      
      this._cityservice.deleteAllCity(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allCity.find(x=>x==this.delarr[this.i]))
                {
                   this.allCity.splice(this.allCity.indexOf(this.delarr[this.i]),1);
                }
            }
            this.delarr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 

  updateCity(item:CityData)
  {
    this._router.navigate(['/updateCity',item.pk_city_id]);
  }

  addCity(item:CityData)
  {
    this._router.navigate(['/addCity',0]);
  }
}
