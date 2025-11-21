import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  imports: [CommonModule]
})
export class QuestionComponent {
  @Input() question!: { text: string, options: string[], correct: string };
  @Output() answerSelected = new EventEmitter<string>();

  highlightedAnswer: string | null = null;

  selectAnswer(option: string) {
    this.answerSelected.emit(option);
  }

  showAnswer() {
    this.highlightedAnswer = this.question.correct;
  }
}
