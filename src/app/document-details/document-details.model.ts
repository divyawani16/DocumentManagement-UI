export class Document {
    documentVersionId?: number;
    documentName: string;
    stageName: string;
    versionNumber: number;
    location: string;
    createdBy: string;
    createdDate:Date;
    updatedBy:string;
    updatedDate : Date;

    constructor(documentName: string, stageName : string, versionNumber: number, location: string, createdBy: string,createdDate:Date, updatedBy: string, updatedDate : Date) {
      this.documentName= documentName;
      this.stageName = stageName;
      this.versionNumber = versionNumber;
      this.location = location;
      this.createdBy = createdBy;
      this.createdDate=createdDate;
      this.updatedBy= updatedBy;
      this.updatedDate = updatedDate;
    }
  }
  