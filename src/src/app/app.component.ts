import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOL Championship';
  finalWinner = '';
  phase = 0;
  listTeamsPhase2: Array<string> = [];
  listTeamsPhase3: Array<string> = [];

  addTeamPhase2(newTeam: string) {
    if(newTeam != ''){
      this.listTeamsPhase2.push(newTeam);
    }
  }

  addTeamPhase3(newTeam: string) {
    if(newTeam != '') {
      this.listTeamsPhase3.push(newTeam);

      this.addWinner(newTeam);
    }
  }

  addWinner(winner: string) {
    this.finalWinner = winner;
  }

}