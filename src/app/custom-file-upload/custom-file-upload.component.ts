import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-file-upload',
  templateUrl: './custom-file-upload.component.html',
  styleUrl: './custom-file-upload.component.css',
})
export class CustomFileUploadComponent {
  @Input() control!: FormControl; // FormControl to bind input value
  @Input() label!: string; // Label for the input field
  @Input() accept!: string; // Accepted file types
  @Input() errorMessages!: { [key: string]: string }; // Validation error messages
  @Input() maxFileSizeAllowedInMB!: number; // Max file size allowed
  @Input() restrictionMessage: string = 'Only JPEG / PNG less than 2MB';
  @Input() formControlName!: string;

  @Output() fileChange = new EventEmitter<any>(); // Emit selected file

  @Input() documentUploadStatus: string | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log(file.type);
    if (file) {
      if (file.size > this.maxFileSizeAllowedInMB * 1024 * 1024) {
        this.control.setErrors({ fileTooLarge: true });
        this.documentUploadStatus = `File exceeds ${this.maxFileSizeAllowedInMB} MB`;
      } else if (
        !this.accept
          .split(', ')
          .some((type: string) => file.type.includes(type))
      ) {
        this.control.setErrors({ fileFormatInvalid: true });
        this.documentUploadStatus = 'Invalid File Format!';
      } else {
        this.control.setErrors(null);
        this.documentUploadStatus = null;
        this.fileChange.emit(file); // Emit the selected file
      }
    }
  }
}
