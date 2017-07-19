import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { SubcategoryData } from './subcategory-data';
import { SubcategoryjoinsData } from './subcategoryjoins-data';
import 'rxjs/Rx';

@Injectable()
export class SubcategoryServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/subcategorys/";
private _url1:string="https://knowledgeresident2.herokuapp.com/subcategoryjoins/";

  constructor(private _http:Http) { }
getAllSubcategory()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}
getSubcategoryById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

getSubcategoryJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}


addSubcategory(item:SubcategoryData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

deleteSubcategory(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

updateSubcategory(item:SubcategoryData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_subcat_id,body,req)
  .map((res:Response)=>res.json());

}

deleteAllSubcategory(item:SubcategoryjoinsData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}

}

