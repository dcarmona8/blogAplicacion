import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Aquí está el cambio
})
export class AppComponent {
  title = 'blogAplicacion';
}
