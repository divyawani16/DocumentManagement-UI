export class Document {
    constructor(
        public propertyId :number=0,
        public propertyName: string = '',
        public address: string = '',
        public city: string = '',
        public pincode: number = 0,
        public building: string = '',
        public floorNumber: number = 0,
        public flatNumber: number = 0
      ) {}
  }