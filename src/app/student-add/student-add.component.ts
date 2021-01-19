import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../shared/employee-data.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  studentForm: FormGroup;
  isEdit: Boolean = false;
  isSubmitted: boolean = false;
  msg:String = '';
  
  constructor(
    private studentService: EmployeeDataService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){

    this.studentForm = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      mobile: new FormControl(''),
      city: new FormControl(''),
      postal_code: new FormControl(''),
      address_line1: new FormControl(''),
      address_line2: new FormControl('')
    })

      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.id){
          let student = this.studentService.getStudent(param.id);
          if(student){
            this.studentForm.setValue(student);
            this.isEdit = true;
            }
          else this.router.navigate(['/students'])
        }
      })
  }

  resetForm(){
    console.log('reset',this.studentForm)
    this.studentForm.reset();
  }

  
  add(){
    this.isSubmitted = true;

    if(this.studentForm.invalid) {
      return;
    }

    let data = this.studentForm.value;
    if(this.studentForm.valid){
      this.studentService.studentList.push(data);
      this.resetForm();
      console.log('this.studentService.studelost',this.studentService.getStudents())
      this.router.navigate(['/students'])
    }
      else {
      this.msg = 'Please complete form'
    }
  }


  edit(){
    this.msg = '';
    if(this.studentForm.valid){
      if(this.studentService.studentEdit(this.studentForm.value)){
        this.router.navigate(['/students'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }

}
