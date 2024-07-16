import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConditionalStatementsComponent } from './conditional-statements/conditional-statements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConditionalStatementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examples';
}
