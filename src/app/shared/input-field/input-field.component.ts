import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() label!: string; // Field label
  @Input() placeholder: string = ''; // Placeholder text
  @Input() control!: FormControl; // FormControl to bind
  @Input() type: string = 'text'; // Input type (e.g., text, date)
  @Input() errorMessages: { [key: string]: string | undefined } = {}; // Error messages
  @Input() isMandatory: boolean = true
}
