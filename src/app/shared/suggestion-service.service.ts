import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { SuggestionData } from './suggestion-data';
import { SuggestionjoinData	 } from './suggestionjoin-data';
  
import 'rxjs/Rx';



@Injectable()
export class SuggestionServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/suggestions/";
private _url1:string="https://knowledgeresident2.herokuapp.com/suggestionjoins/";


  constructor(private _http:Http) { }

getAllSuggestionBook()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}
getSuggestionBookJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}

getSuggestionBookById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}
deleteSuggestionBook(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

addSuggestionBook(item:SuggestionData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}
updateSuggestionBook(item:SuggestionData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_suggestion_id,body,req)
  .map((res:Response)=>res.json());

}


approveAllSuggestionBook(item:SuggestionjoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url1+3,body,requestoption).map((res:Response)=>res.json());
  
}



approveSuggestionBook(Id:number,flag:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url1+Id+flag,req);
}


deleteAllSuggestionBook(item:SuggestionjoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}

}
