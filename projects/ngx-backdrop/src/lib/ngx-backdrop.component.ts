import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-backdrop',
  template: ` <div *ngIf="show" class="ngx-backdrop" [ngStyle]="styles"></div>`,
  styles: [
    `
      .ngx-backdrop {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.8;
        z-index: 999;
      }
    `,
  ],
})
export class NgxBackdropComponent {
  @Input() styles!: any;
  @Input() show = false;
}
