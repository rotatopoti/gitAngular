import { Pipe, PipeTransform } from '@angular/core';
import * as sentiment from 'sentiment';

@Pipe({
  name: 'evaluate'
})
export class EvaluatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sent = sentiment(value);
    let result;
    if(Math.sign(sent.score) > 0){
      result = "positive";
    }
    else{
      result = "negative";
    }
    return result;
  }

}
