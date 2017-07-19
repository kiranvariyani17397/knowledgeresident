import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { FineData } from './fine-data';
import { FinejointData } from './finejoint-data';
import 'rxjs/Rx';


@Injectable()
export class FineServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/fines/";
private _url1:string="https://knowledgeresident2.herokuapp.com/finejoins/";
  constructor(private _http:Http) { }

getAllFine()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}

getFineJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}

getFineById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

addFine(item:FineData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

deleteFine(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

updateFine(item:FineData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_fine_id,body,req)
  .map((res:Response)=>res.json());

}
deleteAllFine(item:FinejointData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}



}
