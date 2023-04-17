import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BoardComponent } from './board/board.component';

@Component({
  imports: [CommonModule, BoardComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'build-a-tic-tac-toe-game';
}
