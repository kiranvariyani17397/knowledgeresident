import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform {
book:any[]=[];
book1:any[]=[];
_book_name:any;
_cat_name:any;
_subcat_name:any;
  transform(value: any, args: any): any {
        if(args!='')
      {
   //     args=args.toLowerCase();
       //this._book_name=value.filter(res=>res.book_name).toLowerCase();
       //this._cat_name=res=>res.cat_name.toLowerCase();
      this.book=value.filter(res=>res.book_name.toLowerCase().startsWith(args.toLowerCase()));
      this.book1=value.filter(res=>res.cat_name.toLowerCase().startsWith(args.toLowerCase()));
      this.book.concat(this.book1);
      this.book1=value.filter(res=>res.subcat_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.book.concat(this.book1);
      }
      else{
        return value;
      }
  }

}
