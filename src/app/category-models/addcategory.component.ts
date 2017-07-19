import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CategoryData } from '../shared/category-data';
import { CategoryServiceService } from '../shared/category-service.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

public _subscription:Subscription;
public _pk_cat_id:number;
public _cat_name:string;
addCategory:CategoryData[]=[];
  constructor(public _categoryService:CategoryServiceService,public _acrouter:ActivatedRoute,public _router:Router) { }

  ngOnInit() {

  this._subscription=this._acrouter.params.subscribe(
    (params:any)=>{

      this._pk_cat_id=params["pk_cat_id"];
    }

  );

  if(this._pk_cat_id==0)
  {
    this._categoryService.getCategoryById(this._pk_cat_id).subscribe(

      (data:CategoryData[])=>{
        this.addCategory=data;
        this._cat_name=this.addCategory[0].cat_name;
        alert(this._cat_name); 
      }
    );
  }
  else{
  this._categoryService.getCategoryById(this._pk_cat_id).subscribe(

      (data:CategoryData[])=>{
          this.addCategory=data;
          this._cat_name=this.addCategory[0].cat_name;
      }

  );
  }
  }

addcategory()
{

if(this._pk_cat_id==0)
{
  this._categoryService.addCategory(new CategoryData(this._pk_cat_id,this._cat_name)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allCategory']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("add category");
    }

  );
}


else{

  this._categoryService.updateCategory(new CategoryData(this._pk_cat_id,this._cat_name)).subscribe(

    (data:any)=>
    {
      this._router.navigate(['/allCategory']);
      console.log(data);
    },
    function(error)
    {

    },
    function()
    {
      console.log("updated category");
    }

  );
}
}
}

