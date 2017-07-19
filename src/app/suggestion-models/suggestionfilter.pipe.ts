import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suggestionfilter'
})
export class SuggestionfilterPipe implements PipeTransform {
suggestion:any[]=[];
suggestion1:any[]=[];

  transform(value: any, args?: any): any {
 if(args!='')
      {
      this.suggestion=value.filter(res=>res.suggestion_book_name.toLowerCase().startsWith(args.toLowerCase()));
      this.suggestion1=value.filter(res=>res.user_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.suggestion.concat(this.suggestion1);
      }
      else{
        return value;
      }
  }

}
