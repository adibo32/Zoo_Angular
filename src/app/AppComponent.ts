import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HologramsComponent } from './holograms/holograms.component';


@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-hologram-list></app-hologram-list> `,
  imports: [HologramsComponent],
})
export class AppComponent {
  title = 'zoo_hologram';
}
