import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class SubPages {
  constructor(public title: string) { }
}

const PAGES = [
  new SubPages('settings-profile'),
  new SubPages('appointment')
];

@Injectable()
export class SubPagesService {
  getPages() { return Observable.of(PAGES); }

  getSubPages(title: string) {
    return this.getPages()
      .map(Pages => Pages.find(subpages => subpages.title === title));
  }
}