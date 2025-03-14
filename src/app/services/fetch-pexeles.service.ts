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

  searchPexeles(query: string,perPage: number = 100,page: number): Observable<any> {
    const url = `${this.apiUrl}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;
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


}
