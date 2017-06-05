import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let employees = [
			{id:1, name:'Lee', joinDate:'2016-08-09', editable: false, age: '28', sex: 'male'},
			{id:2, name:'John', joinDate:'2016-08-19', editable: false, age: '32', sex: 'male'},
			{id:3, name:'Tom', joinDate:'2017-04-07', editable: false, age: '29', sex: 'male'},
			{id:4, name:'Linda', joinDate:'2016-11-14', editable: false, age: '25', sex: 'female'}
		];
		return {employees};
	}
}