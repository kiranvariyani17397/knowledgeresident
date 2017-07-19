import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SubcategoryData } from '../shared/subcategory-data';
import { SubcategoryServiceService } from '../shared/subcategory-service.service';
import { CategoryServiceService } from '../shared/category-service.service';
import { CategoryData } from '../shared/category-data';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {

public _subscription:Subscription;
public _pk_subcat_id:number;
public _subcat_name:string;
public _fk_cat_id:number;
public _cat_name:string;
public i:number;
public _pk_cat_id:number;
addSubcategory:SubcategoryData[]=[];
allCategory:CategoryData[]=[];


  
  constructor(public _subcategoryservice:SubcategoryServiceService,public _categoryservice:CategoryServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

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
    



  this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_subcat_id=params["pk_subcat_id"];
    }

  );

  if(this._pk_subcat_id==0)
  {
    this._subcategoryservice.getSubcategoryById(this._pk_subcat_id).subscribe(

      (data:SubcategoryData[])=>{
        this.addSubcategory=data;
        this._subcat_name=this.addSubcategory[0].subcat_name;
        this._fk_cat_id=this.addSubcategory[0].fk_cat_id;
      }
    );
  }
  else{
  this._subcategoryservice.getSubcategoryById(this._pk_subcat_id).subscribe(

      (data:SubcategoryData[])=>{
          this.addSubcategory=data;
          this._subcat_name=this.addSubcategory[0].subcat_name;
          this._fk_cat_id=this.addSubcategory[0].fk_cat_id;
      }

  );
  }
  }

addsubcategory()
{

if(this._pk_subcat_id==0)
{
  this._subcategoryservice.addSubcategory(new SubcategoryData(this._pk_subcat_id,this._subcat_name,this._fk_cat_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allSubcategory']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add subcategory");
    }

  );
}


else{

  
  this._subcategoryservice.updateSubcategory(new SubcategoryData(this._pk_subcat_id,this._subcat_name,this._fk_cat_id)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allSubcategory']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated subcategory");
    }

  );
}
}
}


