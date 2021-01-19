import { EmployeeDataService } from './../shared/employee-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  empDataArr: any = [];
  searchEmployee:any;

  constructor(private empDataService: EmployeeDataService, private router: Router) { }

  ngOnInit(): void {
    this.empDataService.getEmployeeData().subscribe((data:any) => {
      console.log('employee data===>', data)
      this.empDataArr = data;
    })
  }

  // edit employee function 
  editEmployeeByID(employee: any) {
    this.empDataService.add_employee(employee); 
       this.router.navigate(['/edit-employee/' , employee.id]); 
  }

  // changeRoute function
  onChangeRoute() {
    this.router.navigate(['/add-employee']);
  }

}
