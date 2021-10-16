import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-backdrop',
  template: `<div
    *ngIf="show"
    class="ngx-backdrop"
    [ngStyle]="styles"
    (click)="onBackdrop($any($event))"
  ></div>`,
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

      :host(.full) .ngx-backdrop {
        position: fixed;
      }

      :host(.content) .ngx-backdrop {
        position: absolute;
      }
    `,
  ],
})
export class NgxBackdropComponent {
  @Input() styles!: {[key: string]: any};
  @Input() show = true;
  @Input() canBackDropDismiss = false;
  @Output() onBackDropDismiss = new EventEmitter<HTMLDivElement>();
  
  onBackdrop(event: HTMLDivElement) {
    if (this.canBackDropDismiss) {
      this.show = false;
      this.onBackDropDismiss.emit(event)
    }
  }
}
