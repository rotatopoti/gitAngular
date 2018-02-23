import { Component } from '@angular/core';
import { SearchService } from './shared/services/search/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Search';
  searchResults: any;
  toggle = [];
  comments = [];
  search = '';

  constructor(
    private searchService: SearchService
  ) {}

  getFromGit(search) {
      this.clearToggle();
      this.clearSearchResults();
      this.searchService.getSearch(search)
                        .subscribe( data => {
                          this.searchResults = data.items;
                        });
    }

  showComments(index, owner, repo) {
      if (!this.toggle[index]) {
        this.toggle[index] = true;
        this.searchService.getComments( owner, repo)
                          .subscribe(data => {
                            this.comments[index] = data;
                          });
      } else {
        this.toggle[index] = false;
      }
  }

  clearToggle() {
    this.toggle = [];
  }

  clearSearchResults() {
    this.searchResults = null;
  }
}


