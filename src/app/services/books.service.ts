import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  Url="http://openlibrary.org/search.json?q=";
  GetUrl="https://openlibrary.org"

      retrive(book_name:any){
        if(book_name==null){
          return null
        }else{
          return this.http.get<any>(`${this.Url}${book_name}`);  
        }
      }
      list(data:any){
      return this.http.get<any>(`${this.GetUrl}${data}.json`);
      }
}
