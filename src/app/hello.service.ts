import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {
    const url = `${environment.apiUrl}/api/hello`;
    return this.http.get(url, { responseType: 'text' });
  }
}
