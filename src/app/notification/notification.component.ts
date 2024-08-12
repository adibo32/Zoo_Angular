import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="message$ | async as message" class="notification">
      {{ message }}
    </div>
  `,
  styles: [`
    .notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #4caf50;
      color: white;
      padding: 15px;
      border-radius: 4px;
      z-index: 1000;
      opacity: 0.9;
    }
  `]
})
export class NotificationComponent {
  message$ = this.notificationService.message$;

  constructor(private notificationService: NotificationService) {}
}
