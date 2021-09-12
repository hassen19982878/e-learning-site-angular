import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }


  get_courses()
  {
return this.http.get<any>("http://localhost:8080/courses/all")
  }
  getOneCourse(id:any)
  {
return this.http.get<any>("http://localhost:8080/courses/one/"+id)
  }
  delete_course(id:any)
  {
    return this.http.delete<any>("http://localhost:8080/courses/delete/"+id);
  }
}
