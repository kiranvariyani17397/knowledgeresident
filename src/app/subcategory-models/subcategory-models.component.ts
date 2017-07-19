import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoryData } from '../shared/subcategory-data';
import { SubcategoryjoinsData } from '../shared/subcategoryjoins-data';
import { SubcategoryServiceService } from '../shared/subcategory-service.service';

@Component({
  selector: 'app-subcategory-models',
  templateUrl: './subcategory-models.component.html',
  styleUrls: ['./subcategory-models.component.css']
})
export class SubcategoryModelsComponent implements OnInit {
allSubcategory:SubcategoryData[]=[];
allSubcategoryJoin:SubcategoryjoinsData[]=[];
delarr:SubcategoryjoinsData[]=[];
i:number;
flag:number=0;

  constructor(private _subcategoryservice:SubcategoryServiceService,private _router:Router) { }

  ngOnInit() {
    
     this._subcategoryservice.getSubcategoryJoin().subscribe(
      (data:SubcategoryjoinsData[])=>{
          this.allSubcategoryJoin=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('subcategory view');
      }
    );


  }


   
 

onCheck(item:SubcategoryjoinsData)
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



 deleteAllSubcategory()
    {
      
      this._subcategoryservice.deleteAllSubcategory(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allSubcategoryJoin.find(x=>x==this.delarr[this.i]))
                {
                   this.allSubcategoryJoin.splice(this.allSubcategoryJoin.indexOf(this.delarr[this.i]),1);
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
 


deleteSubcategory(item:SubcategoryData){
  this._subcategoryservice.deleteSubcategory(item.pk_subcat_id)
  .subscribe(
    (data:any)=>{
      this.allSubcategory.splice(this.allSubcategory.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("subcategory delete");
    }
  );
}

updateSubcategory(item:SubcategoryData){
  this._router.navigate(['/updateSubcategory',item.pk_subcat_id]);
}

addSubcategory(item:SubcategoryData)
{
  this._router.navigate(['/addSubcategory',0]);
}
}
