import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../shared/employee-data.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList: Student[];
  studentSearch:any;
  
  constructor(private studentService: EmployeeDataService){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();
    }

}
