export class Document {
    documentId?: number;
    documentName: string;
    userName: string;
    PropertyName: string;
    docTypeName: string;
    docMimeTypeName: string;
  
    constructor(documentName: string, userName: string, PropertyName: string, docTypeName: string, docMimeTypeName: string) {
      this.documentName = documentName;
      this.userName = userName;
      this.PropertyName = PropertyName;
      this.docTypeName = docTypeName;
      this.docMimeTypeName = docMimeTypeName;
    }
  }
  