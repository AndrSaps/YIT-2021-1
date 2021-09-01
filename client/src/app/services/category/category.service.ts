import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Categories {
  ID:number;
  Name: string;
  Color: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44328/api/category';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(category:any) {
    return this.http.post(this.accessPointUrl,category, {headers: this.headers});
  }

  public remove(ID: number ) {
    return this.http.delete(this.accessPointUrl+"/"+ID, {headers: this.headers});
  }
}
