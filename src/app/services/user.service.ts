import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instructor } from '../models/instructor';
import { Student } from '../models/student';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public registerStudent(student: Student) { return this.http.post<any>("http://localhost:8080/students/register", student); }
  public registerInstructor(instructor: Instructor) { return this.http.post<any>("http://localhost:8080/instructors/register", instructor); }

public loginStudent(student:Student){return this.http.post<any>("http://localhost:8080/students/login", student)}
public loginInstructor(instructor:Instructor){return this.http.post<any>("http://localhost:8080/instructors/login", instructor)}

isLoggedIn(){
let token = localStorage.getItem("my-token");
if (token) {
  return true}
else 
return false

}
isLoggedInAdmin() {
  let token = localStorage.getItem("my-token");
  if (token) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
if(decodedToken.role=="admin")
{return true}
else {return false}
  }else
    return false
}
isLoggedInInstructor() {
  let token = localStorage.getItem("my-token");
  if (token) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
if(decodedToken.role=="instructor")
{console.log("inst");
  return true

}
else {return false}
  }else
    return false
}

isLoggedInStudent() {
  let token = localStorage.getItem("my-token");
  if (token) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
if(decodedToken.role=="student")
{return true}
else {return false}
  }else
    return false
}
getIdStudent()
{  let token = localStorage.getItem("my-token");
if (token) {
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(token);
  return decodedToken.id
}


}

get_students()
{return this.http.get<any>("http://localhost:8080/students/all")

}
get_instructors()
{return this.http.get<any>("http://localhost:8080/instructors/all")

}
delete_student_by_id(id:any)
{
  return this.http.delete<any>("http//localhost:8080/students/delete/"+id)
}
delete_instructor_by_id(id:any)
{
  return this.http.delete<any>("http//localhost:8080/instructors/delete/"+id)
}
updateStudent(student:Student)
{
  return this.http.put<any>("http://localhost:8080/students/update",student)
}

updateInstructor(instructor:Instructor)
{
  return this.http.put<any>("http://localhost:8080/students/update",instructor)
}
}