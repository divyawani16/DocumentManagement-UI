export class Document {
    documentVersionId?: number;
    documentName: string;
    stageId: number;
    versionNumber: number;
    location: string;
    createdBy: string;
    createdDate:Date;
    updatedBy:string;
    updatedDate : Date;

    constructor(documentName: string, stageId: number, versionNumber: number, location: string, createdBy: string,createdDate:Date, updatedBy: string, updatedDate : Date) {
      this.documentName= documentName;
      this.stageId = stageId;
      this.versionNumber = versionNumber;
      this.location = location;
      this.createdBy = createdBy;
      this.createdDate=createdDate;
      this.updatedBy= updatedBy;
      this.updatedDate = updatedDate;
    }
  }
  