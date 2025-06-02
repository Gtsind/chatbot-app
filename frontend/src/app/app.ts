import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponseContainer } from "./components/response-container/response-container";
import { UserInputComponent } from "./components/user-input-component/user-input-component";
import { ChatService } from './shared/services/chat-service';
import { PredefinedQuestions } from "./components/predefined-questions/predefined-questions";
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { sleep } from './shared/utilities';
import { ChatbotResponse } from './shared/interfaces/chatbot-response.interface';
import { IMessage } from './shared/interfaces/message.interface';

const FAKE_DELAY = 2000;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResponseContainer, UserInputComponent, PredefinedQuestions, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'client-angular';
  questions: string[] = [];
  messages: IMessage[] = [];
  loading: boolean = false;

  @ViewChild(UserInputComponent) userInputComponent!: UserInputComponent;


  //dependencies
  private chatService = inject(ChatService);


  ngOnInit() {
    this.chatService.getPredefinedQuestions().subscribe((questions: string[]) => {
      this.questions = [...questions];
    });
  }

  /*
    This asynchronous function handles sending a user's message and displaying the chatbot's response:
    Sets the loading state to true and pushes the user's message to the message array.
    Sends the message to the chatbot service and waits for the response.
    Then pushes the chatbot's message to the message list, resets the loading state to false and after
    a short delay, refocuses the input field.
  */
  async handleMessage(message: string) {
    this.loading = true;
    this.messages.push({message, source: 'user' });

    try {
      const data: ChatbotResponse = await firstValueFrom(this.chatService.sendMessage(message));
      await sleep(FAKE_DELAY);
      this.messages.push({message: data.reply, source: 'chatbot'});
      console.log("Response>>", data.reply );
      } catch (err) {
      console.log(err); //todo : handle error
    }
    
    this.loading = false;

    setTimeout(() => {
      this.userInputComponent.focusInput();
    }, 100);
  }
}
