import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { StateData } from './state-data';
import 'rxjs/Rx';

@Injectable()
export class StateServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/states/";
  constructor(private _http:Http) { }
getAllState()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}
getStateById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

addState(item:StateData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

deleteState(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

updateState(item:StateData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_state_id,body,req)
  .map((res:Response)=>res.json());

}

deleteAllState(item:StateData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}

}
