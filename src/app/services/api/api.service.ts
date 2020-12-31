import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`);
  }
}
