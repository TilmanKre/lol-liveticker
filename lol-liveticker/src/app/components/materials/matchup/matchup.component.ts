import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent {
  @Input() teamOneImage: string | undefined;
  @Input() teamOneShort: string | undefined;
  @Input() teamTwoImage: string | undefined;
  @Input() teamTwoShort: string | undefined;
}
