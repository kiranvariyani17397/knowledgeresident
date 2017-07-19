import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { CategoryData } from './category-data';
import 'rxjs/Rx';

@Injectable()
export class CategoryServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/categorys/";
  constructor(private _http:Http) { }
getAllCategory()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}
getCategoryById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}

addCategory(item:CategoryData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

deleteCategory(Id:number){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this._url+Id,req);
}

updateCategory(item:CategoryData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_cat_id,body,req)
  .map((res:Response)=>res.json());

}

deleteAllCategory(item:CategoryData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}


}
