import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxBackdropComponent {
    styles: {
        [key: string]: any;
    };
    show: boolean;
    canBackDropDismiss: boolean;
    onBackDropDismiss: EventEmitter<HTMLDivElement>;
    onBackdrop(event: HTMLDivElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxBackdropComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxBackdropComponent, "ngx-backdrop", never, { "styles": "styles"; "show": "show"; "canBackDropDismiss": "canBackDropDismiss"; }, { "onBackDropDismiss": "onBackDropDismiss"; }, never, never>;
}
