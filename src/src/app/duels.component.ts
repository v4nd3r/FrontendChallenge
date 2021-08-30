import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-duels',
  template: `
            <app-teams (winnerOutput)="getWinner($event)" disabled="{{disabled}}" name="{{name1}}"></app-teams>
            <app-teams (winnerOutput)="getWinner($event)" disabled="{{disabled}}" name="{{name2}}"></app-teams>
            `,
})
export class DuelsComponent implements OnInit {

  @Input() name1 = '';
  @Input() name2 = '';
  disabled = '';
  @Output() winnerOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getWinner(value: string) {
    if(value != ''){
      this.winnerOutput.emit(value);
      this.disabled = "true";
    }
  }
  
}
