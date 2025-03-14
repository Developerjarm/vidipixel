import { Component, OnInit } from '@angular/core';
//services
import { FetchPexelesService } from 'src/app/services/fetch-pexeles.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
public pexeles: any = [];
public page: number = 1;
public pageSearch: number = 1;
public tittleSearch: string = '';
public pexelesSearch: any = [];
public visible: boolean = false;
  constructor(private fetchPexelesService: FetchPexelesService) { }

nextPage(){
this.page++;
this.fetchPexelesService.getPexeles(this.page).subscribe(data => {
  this.pexeles = data.photos;  
  const element = document.getElementById('container2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
}
backPage(){
  this.page--;
  this.fetchPexelesService.getPexeles(this.page).subscribe(data => {
    this.pexeles = data.photos;  
    const element = document.getElementById('container2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

searchPhoto(){
this.fetchPexelesService.searchPexeles(this.tittleSearch,this.pageSearch).subscribe(data => {
  this.pexelesSearch = [];
    this.pexelesSearch = data.photos;
    this.visible = true;
    
  });
}
backPageSearch(){
  this.pageSearch--;
  this.fetchPexelesService.searchPexeles(this.tittleSearch,this.pageSearch).subscribe(data => {
    this.pexelesSearch = data.photos;
    this.visible = true;
    const element = document.getElementById('container3');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
nextPageSearch(){
  this.pageSearch++;
  this.fetchPexelesService.searchPexeles(this.tittleSearch,this.pageSearch).subscribe(data => {
    this.pexelesSearch = data.photos;
    this.visible = true;
    const element = document.getElementById('container3');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

  ngOnInit(): void {
    this.fetchPexelesService.getPexeles(1).subscribe(data => {
      this.pexeles = data.photos;
    });
  }

}
