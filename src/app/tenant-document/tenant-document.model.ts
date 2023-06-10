export class Document {
    constructor(
      public documentId:number = 0,
        public documentName: string = '',
        public userName: string = '',
        public propertyName: string = '',
        public docTypeName: string = '',
        public dateTime: string=''
      ) {}
  }