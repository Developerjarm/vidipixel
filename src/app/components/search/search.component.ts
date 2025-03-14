import { Component, OnInit } from '@angular/core';
//services
import { FetchPexelesService } from 'src/app/services/fetch-pexeles.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
public pexeles: any;
public page: number = 1;
  constructor(private fetchPexelesService: FetchPexelesService) { }

nextPage(){
this.page++;
this.fetchPexelesService.getPexeles(this.page).subscribe(data => {
  this.pexeles = data.photos;  
});
}
backPage(){
  this.page--;
  this.fetchPexelesService.getPexeles(this.page).subscribe(data => {
    this.pexeles = data.photos;  
  });
}

  ngOnInit(): void {
    this.fetchPexelesService.getPexeles(1).subscribe(data => {
      this.pexeles = data.photos;
      console.log(this.pexeles);
      
    });
  }

}
