import { Component, OnInit } from '@angular/core';
//services
import { FetchPexelesService } from 'src/app/services/fetch-pexeles.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // data pexeles
  public pexeles: any = [];
  //page comun
  public page: number = 1;
  //page search
  public pageSearch: number = 1;
  public tittleSearch: string = '';
  //data pexeles search
  public pexelesSearch: any = [];
  //visible search
  public visible: boolean = false;
  //suggestions search
  public suggestions: any = [];
  //visible search animated
  public visibleSearchAnimated: boolean = false;

  constructor(private fetchPexelesService: FetchPexelesService) {}
  ngOnInit(): void {
    this.fetchPexelesService.getPexeles(1).subscribe((data) => {
      this.pexeles = data.photos;
    });
  }
  nextPage() {
    this.page++;
    this.fetchPexelesService.getPexeles(this.page).subscribe((data) => {
      this.pexeles = data.photos;
      const element = document.getElementById('container2');
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    });
  }
  backPage() {
    this.page--;
    this.fetchPexelesService.getPexeles(this.page).subscribe((data) => {
      this.pexeles = data.photos;
      const element = document.getElementById('container2');
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    });
  }
  searchPhoto() {
   
    this.fetchPexelesService
      .searchPexeles(this.tittleSearch, this.pageSearch)
      .subscribe((data) => {
        this.pexelesSearch = [];
        this.pexelesSearch = data.photos;
        setTimeout(() => {
          this.guiaSearch();
        }, 2000);
        this.visibleSearchAnimated = true;
        setTimeout(() => {
          this.visible = true;
        }, 1000);
      });
  }
  backPageSearch() {
    this.pageSearch--;
    this.fetchPexelesService
      .searchPexeles(this.tittleSearch, this.pageSearch)
      .subscribe((data) => {
        this.pexelesSearch = data.photos;
        this.visible = true;
        const element = document.getElementById('container3');
        setTimeout(() => {
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 1000);
      });
  }
  nextPageSearch() {
    this.pageSearch++;
    this.fetchPexelesService
      .searchPexeles(this.tittleSearch, this.pageSearch)
      .subscribe((data) => {
        this.pexelesSearch = data.photos;
        this.visible = true;
        const element = document.getElementById('container3');
        setTimeout(() => {
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 1000);
      });
  }

  // searchPhotoSuggestions(){
  //   this.fetchPexelesService.getSuggestions(this.tittleSearch).subscribe(data => {
  //     debounceTime(300),
  //     distinctUntilChanged()
  //     this.suggestions = data.results;
  //   });
  // }

  guiaSearch() {
    const element = document.getElementById('container3');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
