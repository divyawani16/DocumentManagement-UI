export class Document {
    userId?: number;
    firstName: string;
    lastName: string;
    username: string;
    password: number;
    phoneNumber: number;
  
    constructor(firstName: string, lastName: string, username: string, password: number, phoneNumber: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.password = password;
      this.phoneNumber = phoneNumber;
    }
  }
  