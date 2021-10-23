import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxBackdropComponent {
    constructor() {
        this.show = true;
        this.canBackDropDismiss = false;
        this.onBackDropDismiss = new EventEmitter();
    }
    onBackdrop(event) {
        if (this.canBackDropDismiss) {
            this.show = false;
            this.onBackDropDismiss.emit(event);
        }
    }
}
NgxBackdropComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NgxBackdropComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxBackdropComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: NgxBackdropComponent, selector: "ngx-backdrop", inputs: { styles: "styles", show: "show", canBackDropDismiss: "canBackDropDismiss" }, outputs: { onBackDropDismiss: "onBackDropDismiss" }, ngImport: i0, template: `<div
    *ngIf="show"
    class="ngx-backdrop"
    [ngStyle]="styles"
    (click)="onBackdrop($any($event))"
  ></div>`, isInline: true, styles: ["\n      .ngx-backdrop {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n        opacity: 0.8;\n        z-index: 999;\n      }\n\n      :host(.full) .ngx-backdrop {\n        position: fixed;\n      }\n\n      :host(.content) .ngx-backdrop {\n        position: absolute;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NgxBackdropComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], propDecorators: { styles: [{
                type: Input
            }], show: [{
                type: Input
            }], canBackDropDismiss: [{
                type: Input
            }], onBackDropDismiss: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJhY2tkcm9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbmd4LWJhY2tkcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpQ3ZFLE1BQU0sT0FBTyxvQkFBb0I7SUEvQmpDO1FBaUNXLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7S0FRbEU7SUFOQyxVQUFVLENBQUMsS0FBcUI7UUFDOUIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNuQztJQUNILENBQUM7O2lIQVhVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtMQTdCckI7Ozs7O1VBS0Y7MkZBd0JHLG9CQUFvQjtrQkEvQmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7VUFLRjtvQkFDUixNQUFNLEVBQUU7d0JBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkM7cUJBQ0Y7aUJBQ0Y7OEJBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0ksaUJBQWlCO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWJhY2tkcm9wJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICAgICpuZ0lmPVwic2hvd1wiXHJcbiAgICBjbGFzcz1cIm5neC1iYWNrZHJvcFwiXHJcbiAgICBbbmdTdHlsZV09XCJzdHlsZXNcIlxyXG4gICAgKGNsaWNrKT1cIm9uQmFja2Ryb3AoJGFueSgkZXZlbnQpKVwiXHJcbiAgPjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5uZ3gtYmFja2Ryb3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0KC5mdWxsKSAubmd4LWJhY2tkcm9wIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0KC5jb250ZW50KSAubmd4LWJhY2tkcm9wIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEJhY2tkcm9wQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBzdHlsZXMhOiB7W2tleTogc3RyaW5nXTogYW55fTtcclxuICBASW5wdXQoKSBzaG93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjYW5CYWNrRHJvcERpc21pc3MgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25CYWNrRHJvcERpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIFxyXG4gIG9uQmFja2Ryb3AoZXZlbnQ6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5jYW5CYWNrRHJvcERpc21pc3MpIHtcclxuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub25CYWNrRHJvcERpc21pc3MuZW1pdChldmVudClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19