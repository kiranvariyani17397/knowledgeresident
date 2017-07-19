import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'donatefilter'
})
export class DonatefilterPipe implements PipeTransform {
donate:any[]=[];
donate1:any[]=[];

  transform(value: any, args?: any): any {
    if(args!='')
      {
      this.donate=value.filter(res=>res.donate_book_name.toLowerCase().startsWith(args.toLowerCase()));
      this.donate1=value.filter(res=>res.user_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.donate.concat(this.donate1);
      }
      else{
        return value;
      }
  }

}
