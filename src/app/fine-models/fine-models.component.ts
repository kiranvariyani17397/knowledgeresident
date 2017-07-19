import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinejointData } from '../shared/finejoint-data';
import { FineData } from '../shared/fine-data';
import { FineServiceService } from '../shared/fine-service.service';

@Component({
  selector: 'app-fine-models',
  templateUrl: './fine-models.component.html',
  styleUrls: ['./fine-models.component.css']
})
export class FineModelsComponent implements OnInit {
allFineJoin:FinejointData[]=[];
allFine:FineData[]=[];
delarr:FinejointData[]=[];
i:number;
  constructor(private _fineServiceService:FineServiceService,private _router:Router) { }

  ngOnInit() {
        this._fineServiceService.getFineJoin().subscribe(
      (data:FinejointData[])=>{
          this.allFineJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('Fine view');
      }
    );


  }


onCheck(item:FinejointData)
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


 deleteAllFine()
    {
            console.log("deleteAllSuggestion");
      this._fineServiceService.deleteAllFine(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allFineJoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allFineJoin.splice(this.allFineJoin.indexOf(this.delarr[this.i]),1);
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
 



deleteFine(item:FinejointData){
  this._fineServiceService.deleteFine(item.pk_fine_id)
  .subscribe(
    (data:any)=>{
      this.allFine.splice(this.allFine.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("Fine delete");
    }
  );
}

updateFine(item:FinejointData){


  this._router.navigate(['/updateFine',item.pk_fine_id]);
}

addFine()
{
  this._router.navigate(['/addFine',0]);
}

}
