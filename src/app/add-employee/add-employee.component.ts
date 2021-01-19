import { EmployeeDataService } from './../shared/employee-data.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// import DT from './emp.json';

// declare module   
// const DT = import('./employee.json')

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  isSubmitted: boolean;
  mode: string = 'create';

  isEdit: Boolean = false;
  msg:String = '';

  /*
  updatedEmployee: any = {
    id: "",
    name: "",
    mobile: "",
    city: "",
    postal_code: "",
    address_line1: "",
    address_line2: ""
  };
  */


  // name: any;
  // mobile:any; 
  // city:any; 
  // postal_code:any; 
  // address_line1:any; 
  // address_line2:any;
//  
  get name(){
   return this.employeeForm.get('name');
 }

 get mobile(){
   return this.employeeForm.get('mobile');
 }

 get address_line1(){
   return this.employeeForm.get('address_line1');
 }
 
 get address_line2(){
  return this.employeeForm.get('address_line2');
 }

 get city(){
   return this.employeeForm.get('city');
 }

 get postal_code(){
   return this.employeeForm.get('postal_code');
 }

 constructor(private formBuilder: FormBuilder,
    private employeeService: EmployeeDataService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() { 
    // Add Employee Form -
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      Validators.minLength(10), Validators.maxLength(10)])],
      address_line1: ['', Validators.compose([Validators.required])],
      address_line2: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      postal_code: ['', Validators.compose([Validators.required])],
    });

    // this.route.params.subscribe(param => {
    //   console.log(param)
    //   if(param && param.id){
    //     let employee = this.employeeService.getEmployee(param.id);
    //     if(employee){
    //       this.employeeForm.setValue(employee);
    //       this.isEdit = true;
    //       }
    //     else this.router.navigate(['/employee-list'])
    //   }
    // })

    //****************** Patch single employee ***************** 
     /*
    this.employeeService.employee_source.subscribe((emp: any) => {
       this.updatedEmployee = emp;
      if(emp !== undefined) {
        this.mode = 'update'
      }; 
    })
    */

  }

  // Registration submit  
  onAddEmployeeSubmit() { 

    this.isSubmitted = true;

    /*
    if (this.employeeForm.invalid) {
      return;
    }
    if (this.mode === "create") {
      let create_employee = {
        id: Math.floor(Math.random() *10 ),
        name: this.employeeForm.value.name,
        mobile:  this.employeeForm.value.mobile,
        city:  this.employeeForm.value.city,
        postal_code: this.employeeForm.value.postal_code,
        address_line1: this.employeeForm.value.address_line1,
        address_line2: this.employeeForm.value.address_line2
      };   
      this.employeeService.addNewEmployee(create_employee);
    this.router.navigate(['/employee-list'])
    this.resetForm();
    */

  }

  // Reset Form Function -
  /*
  resetForm() {
    this.isSubmitted = false;
    this.employeeForm.reset();
  }
  */


}
