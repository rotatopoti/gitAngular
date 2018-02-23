import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

import { ISearchData } from '../../interfaces/search';


@Injectable()
export class SearchService {

  constructor( private http: HttpClient ) {}

  getSearch(search) {
    let params = new HttpParams().set('q', search);
    let url = "https://api.github.com/search/repositories";
    return  this.http.get<ISearchData>(url, {params});
  }

  getComments( owner, repo){
    let params = new HttpParams().set('sort', 'updated').set('direction', 'desc');
    let url = "https://api.github.com/repos/"+owner+"/"+repo+"/issues/comments";
    return this.http.get(url, {params});
  }

}

