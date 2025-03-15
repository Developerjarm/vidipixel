import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchPexelesService {
  
  private readonly apiUrl:string = 'https://api.pexels.com/v1';
  private readonly apiKey:string = 'q4uuxySUr0OteYwRRj5gv4bLzwfmLqcEykkfmAcaewkH87o03UTz8h6w';

  constructor( private http: HttpClient) { }
//search photos
  searchPexeles(query: string,page: number): Observable<any> {
    const url = `${this.apiUrl}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=80`;
    const headers = new HttpHeaders({
      Authorization: this.apiKey 
    });
    return this.http.get(url, { headers }).pipe(
      catchError(error => {
        console.error('Error en la solicitud a Pexels:', error);
        return throwError(() => new Error('No se pudo obtener imágenes de Pexels'));
      })
    );
  }
//get photos current
  getPexeles(page: number): Observable<any> {
    const url = `${this.apiUrl}/curated?per_page=100&page=${page}`;
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });

    return this.http.get(url, { headers }).pipe(
      catchError(error => {
        console.error('Error en la solicitud a Pexels:', error);
        return throwError(() => new Error('No se pudo obtener imágenes de Pexels'));
      })
    );
  }

  getSuggestions(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });
    return this.http.get(`${this.apiUrl}/search?query=${query}`, { headers });
  }


}
