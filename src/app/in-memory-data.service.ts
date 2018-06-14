import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { name: 'Mr. Nice', status: 'compeleted' },
      { name: 'Narco', status: 'compeleted' },
      { name: 'Bombasto', status: 'compeleted' },
      { name: 'Celeritas', status: 'open' },
      { name: 'Magneta', status: 'compeleted' },
      { name: 'RubberMan', status: 'open' },
      { name: 'Dynama', status: 'open' },
      { name: 'Dr IQ', status: 'compeleted' },
      { name: 'Magma', status: 'compeleted' },
      { name: 'Tornado', status: 'compeleted' }
    ];
    return {users};
  }
}