import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Person } from "src/data/person";

@Injectable({
  providedIn: 'root'
})

export class UserManagerService{

  private url: string = 'http://localhost:8080/api/persons'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  getAllPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(this.url)
  }

  getPersonByCI( ci: string ): Observable<Person>{
    return this.http.get<Person>(`${this.url}/${ci}`)
  }

  saveOnePerson( person: Person ): Observable<Person>{
    return this.http.post<Person>(this.url, person, {
      headers: this.httpHeaders
    })
  }

  editOnePerson( person: Person ): Observable<Person>{
    return this.http.put<Person>(`${this.url}/${person.ci}`, person, {
      headers: this.httpHeaders
    })
  }

  deleteOnePerson( ci: string ): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${ci}`, {
      headers: this.httpHeaders
    })
  }

}