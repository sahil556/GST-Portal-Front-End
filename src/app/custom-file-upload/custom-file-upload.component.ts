import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-file-upload',
  templateUrl: './custom-file-upload.component.html',
  styleUrl: './custom-file-upload.component.css'
})
export class CustomFileUploadComponent {
  @Input() Label = ""
  @Input() fieldName = ""
  @Input() fileUploadProgress = 0
  @Input() selectedFile? : File
  @Input() control: FormControl | undefined
  @Output() uploadImage = new EventEmitter<string>();
  @Output() fileChoosen = new EventEmitter<any>();

  OnUploadImage($event: Event)
  {
    let node  = ($event.target as HTMLButtonElement).name;
    this.uploadImage.emit(node);
  }

  OnFileChoosen($event: { target: any})
  {
    let node  = ($event.target as HTMLInputElement).name;
    this.fileChoosen.emit($event)
  }
}
