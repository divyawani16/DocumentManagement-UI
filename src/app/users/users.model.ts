export class Document {
    userId?: number;
    firstName: string;
    lastName: string;
    username: string;
    password: number;
    emailId: string;
    phoneNumber: number;
  
    constructor(firstName: string, lastName: string, username: string, password: number,emailId: string, phoneNumber: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.password = password;
      this.emailId=emailId;
      this.phoneNumber = phoneNumber;
    }
  }
  