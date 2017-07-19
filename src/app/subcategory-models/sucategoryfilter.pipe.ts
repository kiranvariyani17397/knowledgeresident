import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sucategoryfilter'
})
export class SucategoryfilterPipe implements PipeTransform {
subcategory:any[]=[];
subcategory1:any[]=[];
  transform(value: any, args?: any): any {
    if(args!='')
      {
      this.subcategory=value.filter(res=>res.subcat_name.startsWith(args));
      this.subcategory1=value.filter(res=>res.cat_name.startsWith(args));
      return this.subcategory.concat(this.subcategory1);
      }
      else{
        return value;
      }
  }

}
