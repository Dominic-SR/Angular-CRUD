import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly URL:string = "http://localhost:5000/api/project"

  constructor(private http:HttpClient) { }
  
  
  Create(data:StudentModel):Observable<StudentModel>
  {
    return this.http.post<StudentModel>(this.URL,data);
  }

  Update(data:StudentModel,projects_id:any):Observable<StudentModel>
  {
    return this.http.put<StudentModel>(this.URL + "/" +projects_id,data);
  }

  GetAll():Observable<StudentModel[]>
  {
    return this.http.get<StudentModel[]>(this.URL);
  }

  GetOne(projects_id:any):Observable<StudentModel>
  {
    return this.http.get<StudentModel>(this.URL + "/" + projects_id);
  }

  Delete(projects_id:any):Observable<StudentModel>
  {
    return this.http.delete<StudentModel>(this.URL + "/" + projects_id);
  }
}
