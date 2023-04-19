import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-board',
  standalone: true,
  styleUrls: ['./board.component.css'],
  templateUrl: './board.component.html',
})
export class BoardComponent {}
