import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewData } from '../shared/review-data';
import { ReviewServiceService } from '../shared/review-service.service';
import { ReviewJoinData } from '../shared/reviewjoin-data';

@Component({
  selector: 'app-review-models',
  templateUrl: './review-models.component.html',
  styleUrls: ['./review-models.component.css']
})
export class ReviewModelsComponent implements OnInit {
allReview:ReviewData[]=[];
allReviewJoin:ReviewJoinData[]=[];
apparr:ReviewJoinData[]=[];

  constructor (private _reviewServiceService:ReviewServiceService,private _router:Router) { }

  ngOnInit() {
    this._reviewServiceService.getRevJoin().subscribe(
      (data:ReviewJoinData[])=>{
          this.allReviewJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('done');
      }
    );


  }

/*deleteRev(item:ReviewData){
  this._reviewServiceService.deleteRev(item.pk_rev_id)
  .subscribe(
    (data:any)=>{
      this.allReview.splice(this.allReview.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("category delete");
    }
  );
}*/

approveRev(item:ReviewJoinData)
{
  this._reviewServiceService.approveRev(item.pk_rev_id,1)  
  .subscribe(
    (data:any)=>{
      this.allReviewJoin.splice(this.allReviewJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("review approve");
    }
  );
}



i:number;


onCheck(item:ReviewJoinData)
{

    if(this.apparr.find(x=>x==item))
    {
      this.apparr.splice(this.apparr.indexOf(item),1);  
    }
    else{
      this.apparr.push(item);
    }
  
   console.log(this.apparr);
}

approveAllRev()
    {
            
      this._reviewServiceService.approveAllRev(this.apparr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.apparr.length ; this.i++)
            {
               if(this.allReviewJoin.find(x=>x==this.apparr[this.i]))
                {
                    this.allReviewJoin.splice(this.allReviewJoin.indexOf(this.apparr[this.i]),1);
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
 




disapproveRev(item:ReviewJoinData)
{
  this._reviewServiceService.approveRev(item.pk_rev_id,2)  
  .subscribe(
    (data:any)=>{
      this.allReviewJoin.splice(this.allReviewJoin.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("review disapprove");
    }
  );
}

}
