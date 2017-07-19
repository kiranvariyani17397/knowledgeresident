import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pacfilter'
})
export class PacfilterPipe implements PipeTransform {
pac:any[]=[];
pac1:any[]=[];



  transform(value: any, args?: any): any {
     if(args!='')
      {
      this.pac=value.filter(res=>res.pac_name.toLowerCase().startsWith(args.toLowerCase()));
      this.pac1=value.filter(res=>res.user_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.pac.concat(this.pac1);
      }
      else{
        return value;
      }
  }

}
