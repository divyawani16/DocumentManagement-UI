export class Document {
    propertyId?: string;
    propertyName: string;
    address: string;
    city: string;
    pincode: number;
    building: string;
    floorNumber:number;
    flatNumber:number;

    constructor(propertyName: string, address: string, city: string, pincode: number, building: string,floorNumber:number , flatNumber: number) {
      this.propertyName = propertyName;
      this.address = address;
      this.city = city;
      this.pincode = pincode;
      this.building = building;
      this.floorNumber=floorNumber;
      this.flatNumber= flatNumber;
    }
  }