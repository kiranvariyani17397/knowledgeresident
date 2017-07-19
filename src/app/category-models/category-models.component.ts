import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryData } from '../shared/category-data';
import { CategoryServiceService } from '../shared/category-service.service';

@Component({
  selector: 'app-category-models',
  templateUrl: './category-models.component.html',
  styleUrls: ['./category-models.component.css']
})
export class CategoryModelsComponent implements OnInit {
allCategory:CategoryData[]=[];
delarr:CategoryData[]=[]; 
i:number;
  constructor(private _categoryservice:CategoryServiceService,private _router:Router) { }

  ngOnInit() {
     this._categoryservice.getAllCategory().subscribe(
      (data:CategoryData[])=>{
          this.allCategory=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('category view');
      }
    );


  }

onCheck(item:CategoryData)
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

deleteAllCategory()
    {
      console.log("delete");
      
      this._categoryservice.deleteAllCategory(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               if(this.allCategory.find(x=>x==this.delarr[this.i]))
                {
                   this.allCategory.splice(this.allCategory.indexOf(this.delarr[this.i]),1);
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
 



deleteCategory(item:CategoryData){
  this._categoryservice.deleteCategory(item.pk_cat_id)
  .subscribe(
    (data:any)=>{
      this.allCategory.splice(this.allCategory.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log("category delete");
    }
  );
}

updateCategory(item:CategoryData){
  this._router.navigate(['/updateCategory',item.pk_cat_id]);
}

addCategory(item:CategoryData)
{
  this._router.navigate(['/addCategory',0]);
}
}
