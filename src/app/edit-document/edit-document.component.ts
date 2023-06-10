import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Document } from '../home/home.model';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Document,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      documentName: [data.documentName, Validators.required],
      userName: [data.userName, Validators.required],
      propertyName: [data.propertyName, Validators.required],
      docTypeName: [data.docTypeName, Validators.required],
     // docMimeTypeName: [data.docMimeTypeName, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedDocument: Document = {
        documentId: this.data.documentId,
        documentName: this.editForm.value.documentName,
        userName: this.editForm.value.userName,
        propertyName: this.editForm.value.propertyName,
        docTypeName: this.editForm.value.docTypeName,
        dateTime:this.editForm.value.datetime,
        file: this.editForm.value.file
      };

      this.dialogRef.close(updatedDocument);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
