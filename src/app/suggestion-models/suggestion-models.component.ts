import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuggestionData } from '../shared/suggestion-data';
import { SuggestionjoinData } from '../shared/suggestionjoin-data';
import { SuggestionServiceService } from '../shared/suggestion-service.service';



@Component({
  selector: 'app-suggestion-models',
  templateUrl: './suggestion-models.component.html',
  styleUrls: ['./suggestion-models.component.css']
})
export class SuggestionModelsComponent implements OnInit {
allSuggestionJoin:SuggestionjoinData[]=[];
allSuggestion:SuggestionData[]=[];
apparr:SuggestionjoinData[]=[];
i:number;

  constructor(private _suggestionServiceService:SuggestionServiceService,private _router:Router) { }

  ngOnInit() {

    this._suggestionServiceService.getSuggestionBookJoin().subscribe(
      (data:SuggestionjoinData[])=>{
          this.allSuggestionJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('done');
      }
    );



  }


onCheck(item:SuggestionjoinData)
{
  console.log("oncheck");
  
    if(this.apparr.find(x=>x==item))
    {
      this.apparr.splice(this.apparr.indexOf(item),1);  
    }
    else{
      this.apparr.push(item);
    }
  
   console.log(this.apparr);
}

/*deleteSuggestion(item:SuggestionjoinData){
  this._suggestionServiceService.deleteSuggestionBook(item.pk_suggestion_id)
  .subscribe(
    (data:any)=>{
      this.allSuggestionJoin.splice(this.allSuggestionJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("Suggestion delete");
    }
  );

}*/


approveSuggestion(item:SuggestionjoinData)
{
  this._suggestionServiceService.approveSuggestionBook(item.pk_suggestion_id,1)  
  .subscribe(
    (data:any)=>{
      this.allSuggestionJoin.splice(this.allSuggestionJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("suggestion approve");
    }
  );
}




disapproveSuggestion(item:SuggestionjoinData)
{
  this._suggestionServiceService.approveSuggestionBook(item.pk_suggestion_id,2)  
  .subscribe(
    (data:any)=>{
      this.allSuggestionJoin.splice(this.allSuggestionJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("suggestion disapprove");
    }
  );
}


approveAllSuggestion()
    {
            
      this._suggestionServiceService.approveAllSuggestionBook(this.apparr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.apparr.length ; this.i++)
            {
               if(this.allSuggestionJoin.find(x=>x==this.apparr[this.i]))
                {
                   this.allSuggestionJoin.splice(this.allSuggestionJoin.indexOf(this.apparr[this.i]),1);
                }
            }
            this.apparr=[];
            
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );
    }
 



/* deleteAllSuggestion()
    {
            console.log("deleteAllSuggestion");
      this._suggestionServiceService.deleteAllSuggestionBook(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allSuggestionJoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allSuggestionJoin.splice(this.allSuggestionJoin.indexOf(this.delarr[this.i]),1);
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
 */

updateSuggestion(item:SuggestionData){
  this._router.navigate(['/updateSuggestion',item.pk_suggestion_id]);
}

addSuggestion(item:SuggestionData)
{
  this._router.navigate(['/addSuggestion',0]);
}


}
