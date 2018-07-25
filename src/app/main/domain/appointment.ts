export class Appointment {

  constructor(public _id: string,
              public firstName: string,
              public lastName: string,
              public email: string,
              public phone: number,
              public address1: string,
              public address2: string,
              public city: string,
              public state: string,
              public zip: number,
              public projectType: string,
              public date: string,
              public time: string,
              public comment: string,
              public userId: string,
              public status: string) {
  }
}
