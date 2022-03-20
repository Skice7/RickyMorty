import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { characters } from './models/character.model';

const baseURL = 'http://localhost:3000/characters'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<characters[]> {
    return this.http.get<characters[]>(baseURL);
  }

  get(id: any): Observable<characters> {
    return this.http.get<characters>(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<characters[]> {
    return this.http.get<characters[]>(`${baseURL}?name=${name}`);
  }
}
