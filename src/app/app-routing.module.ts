import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
