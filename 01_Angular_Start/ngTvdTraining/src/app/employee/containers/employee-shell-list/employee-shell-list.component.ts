import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-shell-list',
  templateUrl: 'employee-shell-list.component.html'
})
export class EmployeeShellListComponent implements OnInit {
  pageTitle = 'Employees';

  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    // this.employees$ = this.employeeService.getEmployees(); // wäre schöner; dann im Template mit async arbeiten
    this.employeeService.getEmployees().subscribe(list => (this.employees = list));
  }
}
