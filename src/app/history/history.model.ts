export class Document {
    documentAuditId?: number;
    documentName: string;
    stageName: string;
    finishedBy: string;
    finishedOn: Date;
    documentVersionId: number;
    
  
    constructor(documentName: string, stageName: string, finishedBy: string, finishedOn: Date, documentVersionId: number) {
      this.documentName = documentName
      this.stageName = stageName;
      this.finishedBy = finishedBy;
      this.finishedOn = finishedOn;
      this.documentVersionId = documentVersionId;
    
    }
  }
  