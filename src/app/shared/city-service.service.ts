import { Injectable } from '@angular/core';
import { CityData } from './city-data';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';
 
@Injectable()
export class CityServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/cities/";
  constructor(private _http:Http) { }

  getAllCity()
  {
    return this._http.get(this._url).map((_res:Response)=>_res.json());
  }
  getAllCityById(Id:number)
  {
    return this._http.get(this._url).map((_res:Response)=>_res.json());
  }

  addCity(item:CityData)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:header});
    return this._http.post(this._url,body,req)
    .map((_res:Response)=>_res.json());
  }


  deleteCity(Id:number)
  {
    let header=new Headers({'Content_Type':'application/json'});
    let req=new RequestOptions({headers:header});
    return this._http.delete(this._url+Id,req);
  }
  updateCity(item:CityData)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:header});
    return this._http.put(this._url+item.pk_city_id,body,req)
    .map((_res:Response)=>_res.json());
  }


  deleteAllCity(item:CityData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}


}
