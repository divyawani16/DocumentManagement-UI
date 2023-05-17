export class Document {
    // userId?: number;/
    // firstName: string;
    // lastName: string;
    // username: string;
    // password: number;
    // emailId: string;
    // phoneNumber: number;
  
    // constructor(firstName: string, lastName: string, username: string, password: number,emailId: string, phoneNumber: number) {
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   this.username = username;
    //   this.password = password;
    //   this.emailId=emailId;
    //   this.phoneNumber = phoneNumber;
    // }
    constructor(
      public firstName: string = '',
      public lastName: string = '',
      public username: string = '',
      public password: string = '',
     // public emailId: string = '',
      public phoneNumber: number = 0,
 
    ) {}
  }
  