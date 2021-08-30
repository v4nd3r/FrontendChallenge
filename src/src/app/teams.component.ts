import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-describedby="button-addon2" value="{{name}}" #nameTeam [readonly]="disabled ? true : null">
      <button class="btn btn-sm btn-success" type="button" (click)="getWinner(nameTeam.value);" [disabled]="disabled ? true : null" >
        <i class="fas fa-angle-double-right"></i>
      </button>
    </div>`
})
export class TeamsComponent implements OnInit {

  @Input() teamId: string;
  @Input() name: string;
  @Input() disabled: string;

  @Output() winnerOutput = new EventEmitter<string>();

  constructor() {
    this.teamId = "0";
    this.name = '';
    this.disabled = '';
  }

  ngOnInit() {
  }

  getWinner(value: string) {
    if(value != ''){
      this.winnerOutput.emit(value);
      this.disabled = "true";
    }
  }
  
}
