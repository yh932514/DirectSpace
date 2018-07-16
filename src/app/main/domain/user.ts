export class User {
  constructor(public _id: string,
              public type: string,
              public comments: string,
              public phone: number,
              public status: string,
              public address: string,
              public firstName: string,
              public lastName: string,
              public address1: string,
              public address2: string,
              public state: string,
              public zip: number,
              public email: string,
              public username: string) {
  }
}
