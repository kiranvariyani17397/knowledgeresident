import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finefilter'
})
export class FinefilterPipe implements PipeTransform {

fine:any[]=[];
fine1:any[]=[];


  transform(value: any, args?: any): any {
    if(args!='')
      {
      this.fine=value.filter(res=>res.book_name.toLowerCase().startsWith(args.toLowerCase()));
      this.fine1=value.filter(res=>res.book_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.fine.concat(this.fine1);
      }
      else{
        return value;
      }
  }

}
