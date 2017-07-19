import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {
city:any[]=[];
  transform(value: any, args?: any): any {
        if(args!='')
      {
      return this.city=value.filter(res=>res.city_name.startsWith(args));
      }
      else{
        return value;
      }
  }

}
