
export class Document {

  constructor(
    public documentId: number = 0,
    public file: File | undefined = undefined,
    public documentName: string = '',
    public userName: string = '',
    public propertyName: string = '',
    public docTypeName: string = '',
    public dateTime:string=''
  ) {}
}