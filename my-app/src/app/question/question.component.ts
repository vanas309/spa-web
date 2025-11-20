import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: any; 
  @Output() answerSelected = new EventEmitter<string>();
  
  selectedAnswer: string = '';
  correctAnswerHighlighted: boolean = false;

  selectAnswer(option: string) {
    this.selectedAnswer = option;
    this.answerSelected.emit(option);
  }

  showAnswer() {
    this.correctAnswerHighlighted = true;
  }
}
