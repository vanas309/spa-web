import { Component, ViewChild } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @ViewChild(QuestionComponent) questionComponent!: QuestionComponent;

  questionData = {
    text: 'Яка столиця України?',
    options: ['Київ', 'Львів', 'Одеса', 'Харків'],
    correct: 'Київ'
  };

  selectedAnswer: string = '';

  onAnswerSelected(answer: string) {
    this.selectedAnswer = answer;
  }

  showAnswer() {
    this.questionComponent.showAnswer();
  }
}
