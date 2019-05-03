import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'what is your name',
        answer : 'my name is brad',
        hide: true
      },
      {
        text: 'what is your favorite color',
        answer : 'my name is blue',
        hide: true
      },
      {
        text: 'what is your favrite language',
        answer : 'my name is javascript',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }
}
