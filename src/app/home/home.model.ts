export class Document {
    documentId?: number;
    documentName: string;
    userId: number;
    propertyId: number;
    docTypeId: number;
    docMimeTypeId: number;
  
    constructor(documentName: string, userId: number, propertyId: number, docTypeId: number, docMimeTypeId: number) {
      this.documentName = documentName;
      this.userId = userId;
      this.propertyId = propertyId;
      this.docTypeId = docTypeId;
      this.docMimeTypeId = docMimeTypeId;
    }
  }
  