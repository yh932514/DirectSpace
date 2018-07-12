export class User {
  constructor(public _id: string,
              public type: string,
              public comments: string,
              public phone: number,
              public status: string, 
              public address: string,
              public firstName: string,
              public lastName:string,
              public email: string,
              public username: string) {
  }
}
