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
if(decodedToken.data.role=="admin")
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
if(decodedToken.data.role=="instructor")
{return true}
else {return false}
  }else
    return false
}

isLoggedInStudent() {
  let token = localStorage.getItem("my-token");
  if (token) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
if(decodedToken.data.role=="student")
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
  return decodedToken.data.id
}


}
}