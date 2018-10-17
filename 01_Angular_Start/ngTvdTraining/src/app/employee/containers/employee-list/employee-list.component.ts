import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import * as fromService from '../../services';

@Component({
  templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];

  listFilter: string;

  constructor(private service: fromService.EmployeeService) {}

  ngOnInit() {
    this.service.getEmployees().subscribe(list => {
      this.employees = list;
      this.performFilter(this.listFilter);
    });
  }

  onValueChange(value: string): void {
    this.performFilter(value);
  }

  performFilter(filterBy?: string): void {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filterBy) {
      this.filteredEmployees = this.employees.filter(
        (e: Employee) =>
          (e.firstname.toLocaleLowerCase() + e.lastname.toLocaleLowerCase()).indexOf(filterBy) !==
          -1
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }
}
