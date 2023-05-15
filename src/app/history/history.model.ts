export class Document {
    documentAuditId?: number;
    stageId: number;
    finishedBy: string;
    finishedOn: Date;
    documentVersionId: number;
    
  
    constructor(stageId: number, finishedBy: string, finishedOn: Date, documentVersionId: number) {
      this.stageId = stageId;
      this.finishedBy = finishedBy;
      this.finishedOn = finishedOn;
      this.documentVersionId = documentVersionId;
    
    }
  }
  