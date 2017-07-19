import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {
category:any[]=[];
_cat_name:any;
  transform(value: any, args?: any): any {

        if(args!='')
      {
   //     args=args.toLowerCase();
     //   this._cat_name=value.filter(res=>res.cat_name).toLowerCase();
      return this.category=value.filter(res=>res.cat_name.toLowerCase().startsWith(args.toLowerCase()));
      }
      else{
        return value;
      }
  }

}
