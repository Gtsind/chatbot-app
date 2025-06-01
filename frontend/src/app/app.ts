import { Component, inject } from '@angular/core';
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


  //dependencies
  private chatService = inject(ChatService);


  ngOnInit() {
    this.chatService.getPredefinedQuestions().subscribe((questions: string[]) => {
      this.questions = [...questions];
    });
  }

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
  }
}
