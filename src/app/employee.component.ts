import { Component, OnInit }                 from '@angular/core';

import 'rxjs/add/operator/map';

import { Employee }                from './employee';
import { EmployeeService }         from './employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  employeeName:string;

  constructor(
    private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService
        .getEmployees()
        .then(employees => this.employees = employees);
  }
  
  onEdit(employee: Employee) {
  	employee.editable = true;
  }
  
  onSave(employee: Employee) {
  	employee.editable = false;
	this.edit(employee)
  }
  
  onSelect(employee: Employee): void {
  	if(this.selectedEmployee == employee){
		this.selectedEmployee = null
	}else{
  		this.selectedEmployee = employee;
	}
  }
  
  edit(employee: Employee):void {
  	if (!employee.name) { return; }
	if (!employee.joinDate) { return; }
	if (!employee.age) { return; }
	if (!employee.sex) { return; }
	this.employeeService.update(employee);
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}