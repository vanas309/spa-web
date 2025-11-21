import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  imports: [CommonModule, QuestionComponent]
})
export class QuizComponent {
  questionData = {
    text: 'Який оператор виконує перебір масиву?',
    options: ['for', 'if', 'switch', 'return'],
    correct: 'for'
  };

  lastAnswer: string | null = null;

  @ViewChild(QuestionComponent) questionComponent!: QuestionComponent;

  handleAnswer(selected: string) {
    this.lastAnswer = selected;
  }

  showCorrect() {
    this.questionComponent.showAnswer();
  }
}
