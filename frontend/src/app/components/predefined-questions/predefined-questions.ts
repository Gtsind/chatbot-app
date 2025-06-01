import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-predefined-questions',
  imports: [CommonModule],
  templateUrl: './predefined-questions.html',
  styleUrl: './predefined-questions.css'
})
export class PredefinedQuestions {
@Input() questions: string [] = [];
@Output() asked = new EventEmitter<string>();
isToggled: boolean = false;

toggleShowQuestions() {
  this.isToggled = !this.isToggled;
}

}
