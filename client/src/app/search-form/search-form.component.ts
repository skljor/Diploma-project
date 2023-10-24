import { Component, EventEmitter, Input, Output } from '@angular/core';
import { submitEventData } from 'src/types/search-form';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  resetIcon = faRedo;
  @Input() firstLabel: string | undefined;
  @Input() secondLabel: string | undefined;
  @Output() searchSubmitEvent: EventEmitter<submitEventData> = new EventEmitter();
  @Output() resetEvent:EventEmitter<void> = new EventEmitter();

  handleSubmitClick(event: Event, firstInput: HTMLInputElement, secondInput: HTMLInputElement) {
    event.preventDefault();
    this.searchSubmitEvent.emit({
      firstInputValue: firstInput.value,
      secondInputValue: secondInput.value
    });
  }

  handleResetClick(firstInput: HTMLInputElement, secondInput: HTMLInputElement) {
    firstInput.value = '';
    secondInput.value = '';
    this.resetEvent.emit();
  }
}
