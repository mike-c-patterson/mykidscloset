import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map, share } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Kid} from './kid.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class KidsApiService {

  constructor(
    private http: HttpClient
  ) {}

  getKids(): Observable<Kid[]> {
    return this.http.get<Kid[]>(`${API_URL}/kids`);
  }

  getKid(id: number): Observable<Kid> {
    return this
      .getKids()
      .pipe(
        map(kids => kids.find(kid => kid.id == id))
      );
  }

  saveKid(kid: Kid): Observable<Kid> {
    return this.http.post<Kid>(`${API_URL}/kids/${kid.id}`, kid, httpOptions);
  }

  addKid(kid: Kid): Observable<Kid> {
    return this.http.put<Kid>(`${API_URL}/kids`, kid, httpOptions)
  }
}
