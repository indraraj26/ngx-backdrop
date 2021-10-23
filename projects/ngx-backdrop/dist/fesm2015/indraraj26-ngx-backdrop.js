import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgxBackdropComponent {
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

class NgxBackdropModule {
}
NgxBackdropModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NgxBackdropModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxBackdropModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NgxBackdropModule, declarations: [NgxBackdropComponent], imports: [CommonModule], exports: [NgxBackdropComponent] });
NgxBackdropModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NgxBackdropModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NgxBackdropModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxBackdropComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgxBackdropComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-backdrop
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxBackdropComponent, NgxBackdropModule };
//# sourceMappingURL=indraraj26-ngx-backdrop.js.map
