import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ChatbotResponse } from '../interfaces/chatbot-response.interface';
import { environment } from '../../../environments/environment.development';

const API_URL = `${environment.apiURL}/chat`;

const pq = [
  'Who are you?',
  'Which projects have you worked on?',
  'What are your skills?',
  'Tell me a fun fact!',
]

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  sendMessage(prompt: string) {
    return this.http.post<ChatbotResponse>(`${API_URL}`, { prompt } );
  }

  //Mock API response
  getPredefinedQuestions() {
    return of (pq);
  }

  constructor(private http: HttpClient) { }
}
