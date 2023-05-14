export class Document {
    documentVersionId?: number;
    documentId: number;
    stageId: number;
    versionNumber: number;
    location: string;
    createdBy: string;
    createdDate:Date;
    updatedBy:string;
    updatedDate : Date;

    constructor(documentId: number, stageId: number, versionNumber: number, location: string, createdBy: string,createdDate:Date, updatedBy: string, updatedDate : Date) {
      this.documentId = documentId;
      this.stageId = stageId;
      this.versionNumber = versionNumber;
      this.location = location;
      this.createdBy = createdBy;
      this.createdDate=createdDate;
      this.updatedBy= updatedBy;
      this.updatedDate = updatedDate;
    }
  }
  