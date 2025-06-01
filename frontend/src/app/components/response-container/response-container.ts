import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IMessage } from '../../shared/interfaces/message.interface';

@Component({
  selector: 'app-response-container',
  imports: [CommonModule],
  templateUrl: './response-container.html',
  styleUrl: './response-container.css'
})
export class ResponseContainer implements AfterViewChecked {
  @Input() messages: IMessage[] = [];
  @Input() loading: boolean = false;
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const element = this.messageContainer.nativeElement;
    element.scrollTop = element.scrollHeight;
  }

}
