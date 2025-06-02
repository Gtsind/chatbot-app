import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-input-component',
  imports: [CommonModule],
  templateUrl: './user-input-component.html',
  styleUrl: './user-input-component.css'
})
export class UserInputComponent {
  @Output() messageSent = new EventEmitter<string>();
  @Input() disabled = false;
  @ViewChild('userInput') userInput!: ElementRef;

  onSend(input: HTMLInputElement) {
    this.messageSent.emit(input.value.trim());
    console.log("Input >>", input.value);
    input.value = "";  
  }

  focusInput() {
    if (this.userInput) {
      this.userInput.nativeElement.focus();
    }
  }
}