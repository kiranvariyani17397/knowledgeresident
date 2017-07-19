import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SuggestionData } from '../shared/suggestion-data';
import { SuggestionjoinData } from '../shared/suggestionjoin-data';
import { SuggestionServiceService } from '../shared/suggestion-service.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-addsuggestion',
  templateUrl: './addsuggestion.component.html'
  //styleUrls: ['./addsuggestion.component.css']
})
export class AddsuggestionComponent implements OnInit {


public _subscription:Subscription;
public _pk_suggestion_id:number;
public _suggestion_book_name:string;
public _suggestion_descr:String;
public _suggestion_type:number;
public _fk_user_id:number;
addSuggestion:SuggestionData[]=[];
allSuggestionJoin:SuggestionjoinData[]=[];


  constructor(private _suggestionService:SuggestionServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }



  ngOnInit() {



  this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_suggestion_id=params["pk_suggestion_id"];
    }

  );

  if(this._pk_suggestion_id==0)
  {
    console.log("add");
    this._suggestionService.getSuggestionBookById(this._pk_suggestion_id).subscribe(

      (data:SuggestionData[])=>{
        this.addSuggestion=data;
        this._suggestion_book_name=this.addSuggestion[0].suggestion_book_name;
        this._suggestion_descr=this.addSuggestion[0].suggestion_descr;
        this._suggestion_type=this.addSuggestion[0].suggestion_type;
        this._fk_user_id=this.addSuggestion[0].fk_user_id;
        

      }
    );
  }
  else{
console.log("update");
     this._suggestionService.getSuggestionBookById(this._pk_suggestion_id).subscribe(

      (data:SuggestionData[])=>{
        this.addSuggestion=data;
        this._suggestion_book_name=this.addSuggestion[0].suggestion_book_name;
        this._suggestion_descr=this.addSuggestion[0].suggestion_descr;
        this._suggestion_type=this.addSuggestion[0].suggestion_type;
        this._fk_user_id=this.addSuggestion[0].fk_user_id;
        

      }
    );
  }    
  }
addsuggestion()
{

if(this._pk_suggestion_id==0)
{
  this._suggestionService.addSuggestionBook(new SuggestionData(this._pk_suggestion_id,this._suggestion_book_name,this._suggestion_descr,this._suggestion_type,this._fk_user_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allSuggestion']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add Suggestion");
    }

  );
}


else{

  
  this._suggestionService.updateSuggestionBook(new SuggestionData(this._pk_suggestion_id,this._suggestion_book_name,this._suggestion_descr,this._suggestion_type,this._fk_user_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allSuggestion']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated Suggestion");
    }

  );
}
}



}
