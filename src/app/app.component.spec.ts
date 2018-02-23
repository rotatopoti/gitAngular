import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { EvaluatePipe} from './shared/pipes/evaluate.pipe';
import { SearchService} from './shared/services/search/search.service';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('AppComponent', () => {
  let service: SearchService;
  beforeEach(async(() => {
    service = new SearchService(null);
    spyOn( service, 'getComments').and.callFake(() => {
      return Observable.from([ [1, 2, 3] ]);
    });

    spyOn( service, 'getSearch').and.callFake(() => {
      return Observable.from([ {items: [4, 5, 6]} ]);
    });
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent,
        EvaluatePipe
      ],
      providers: [
        { provide: SearchService, useValue: service }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Github Search');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Github Search!');
  }));
  it('should have an initial value of empty array for comments', async( () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.comments).toEqual([]);
    }));

  it('should have an initial value of empty array for toggle', async( () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.toggle).toEqual([]);
  }));

  it('should add a toggle on create instance', async( () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.showComments(0, 'test', 'test');
    expect(app.toggle[0]).toBeTruthy();
  }));
  it('showComments should call searchService getComments', async( () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.showComments(0, 'test', 'test');
    expect(app.comments[0]).toEqual([1, 2, 3]);
  }));
  it('getFromGit should call searchService getSearch', async( () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.getFromGit('angular');
    expect(app.searchResults).toEqual([4, 5, 6]);
  }));
});
