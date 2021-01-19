 
 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import map from 'rxjs/operators';

import { environment } from './../../environments/environment';
import empdata from '../../assets/emp.json';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})

export class EmployeeDataService {

  url: any;
  employee_data: any = [];
  // url = '../../assets/emp.json';

  // Alternate solution
  studentList:Student [] = [];

  employee_source = new BehaviorSubject("single-employee");
  updated_employee = this.employee_source.asObservable()

  constructor(private _http: HttpClient) {
  }

  
  // Getting Employee Data
  getEmployeeData(): Observable<any> {
    console.log('data json===>', empdata)
    // return of(this.employee_data);
    return this._http.get("../../assets/emp.json");
  } 

  // ********** getting employee list ************
  getStudents(){
    return this.studentList;
  }
  getStudent(id){
    let student: Student;
    this.studentList.map(val=>{
      if(val.id == id) student = val;
    });
    return student;
  }
  studentEdit(student){
    let present: Boolean = false;
    this.studentList.map((val, index)=>{
      if(val.id == student.id) {this.studentList[index] = student;present=true}
    });
    return present;
  }

  // add new employee to the existing employee list-
  // addNewEmployee(employee) {
  //   empdata.push(employee); 
  //   const options = { Headers, responseType: 'json' as 'blob' };
  //   return this._http.post(environment.url, empdata, options)
  // }

  // update employee function
  // updateEmployeeByID(employee) {
  //   return this._http.put("../../assets/employee.json", '/' + employee.id, employee);
  // };

  // update product using behaviour subject
  add_employee(employee) {
    this.employee_source.next(employee);
  }


}
