import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

export interface TaskData{
  ID:number;
  Text:string;
  Status:boolean;
  Deadline?:Date;
  CategoryID?:number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44328/api/task';
  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }
  
  public add(task:any) {
    return this.http.post(this.accessPointUrl, task, {headers: this.headers});
  }

  public remove(ID: number ) {
    return this.http.delete(this.accessPointUrl+"/"+ID, {headers: this.headers});
  }

  public update(task:any) {
    return this.http.put(this.accessPointUrl + '/' + task.ID,task , {headers: this.headers});
  }
}
