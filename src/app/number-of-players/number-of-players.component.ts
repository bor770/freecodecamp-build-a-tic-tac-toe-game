import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-number-of-players',
  standalone: true,
  styleUrls: ['./number-of-players.component.css'],
  templateUrl: './number-of-players.component.html',
})
export class NumberOfPlayersComponent {}
