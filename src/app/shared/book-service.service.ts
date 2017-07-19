import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { BookData } from './book-data';
import 'rxjs/Rx';
import { BookJoinData } from './bookjoin-data';
@Injectable()
export class BookServiceService {
private _url:string="https://knowledgeresident2.herokuapp.com/books/";
private _url1:string="https://knowledgeresident2.herokuapp.com/bookjoins/";
private _url2:string="https://knowledgeresident2.herokuapp.com/bookbysubcategorys/";

  constructor(private _http:Http) { }

getAllBook()
{
  return this._http.get(this._url).map((_res:Response)=>_res.json());
}

getBookJoin()
{
  return this._http.get(this._url1).map((_res:Response)=>_res.json());
}
 
getBookById(Id:number)
{
  return this._http.get(this._url+Id).map((_res:Response)=>_res.json());
}


addBook(item:BookData)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url,body,req)
  .map((res:Response)=>res.json());

}

updateBook(item:BookData)
{
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this._url+item.pk_book_id,body,req)
  .map((res:Response)=>res.json());

}


getBookByCatId(Id:number)
{
  return this._http.get(this._url2+Id).map((_res:Response)=>_res.json());
}

deleteBook(item:BookJoinData)
{
 let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this._url1+item.pk_book_id,body,req)
  .map((res:Response)=>res.json());
}


deleteAllBook(item:BookJoinData[]){
  let body=JSON.stringify(item);
   let headers=new Headers({'Content-Type':'application/json'});
  let requestoption=new RequestOptions({headers:headers});
  return this._http.post(this._url+1,body,requestoption).map((res:Response)=>res.json());
  
}


}
