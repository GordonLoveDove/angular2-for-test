import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private employeesUrl = 'api/employees'; 

  constructor(private http: Http) { }

  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.employeesUrl)
               .toPromise()
               .then(response => response.json().data as Employee[])
               .catch(this.handleError);
  }

  update(employee: Employee): Promise<Employee> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http
      .put(url, JSON.stringify(employee), {headers: this.headers})
      .toPromise()
      .then(() => employee)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}