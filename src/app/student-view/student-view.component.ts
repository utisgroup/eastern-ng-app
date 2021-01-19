import { EmployeeDataService } from './../shared/employee-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  student: Student;
  
  constructor(
    private empDataService: EmployeeDataService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){
      this.route.params.subscribe(param => {
        console.log(param)
        if(param){
          this.student = this.empDataService.getStudent(param.id);
        }
      })
      
    }

}
