(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@indraraj26/ngx-backdrop', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.indraraj26 = global.indraraj26 || {}, global.indraraj26["ngx-backdrop"] = {}), global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var NgxBackdropComponent = /** @class */ (function () {
      function NgxBackdropComponent() {
          this.show = true;
          this.canBackDropDismiss = false;
          this.onBackDropDismiss = new i0.EventEmitter();
      }
      NgxBackdropComponent.prototype.onBackdrop = function (event) {
          if (this.canBackDropDismiss) {
              this.show = false;
              this.onBackDropDismiss.emit(event);
          }
      };
      return NgxBackdropComponent;
  }());
  NgxBackdropComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NgxBackdropComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  NgxBackdropComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: NgxBackdropComponent, selector: "ngx-backdrop", inputs: { styles: "styles", show: "show", canBackDropDismiss: "canBackDropDismiss" }, outputs: { onBackDropDismiss: "onBackDropDismiss" }, ngImport: i0__namespace, template: "<div\n    *ngIf=\"show\"\n    class=\"ngx-backdrop\"\n    [ngStyle]=\"styles\"\n    (click)=\"onBackdrop($any($event))\"\n  ></div>", isInline: true, styles: ["\n      .ngx-backdrop {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n        opacity: 0.8;\n        z-index: 999;\n      }\n\n      :host(.full) .ngx-backdrop {\n        position: fixed;\n      }\n\n      :host(.content) .ngx-backdrop {\n        position: absolute;\n      }\n    "], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NgxBackdropComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'ngx-backdrop',
                      template: "<div\n    *ngIf=\"show\"\n    class=\"ngx-backdrop\"\n    [ngStyle]=\"styles\"\n    (click)=\"onBackdrop($any($event))\"\n  ></div>",
                      styles: [
                          "\n      .ngx-backdrop {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n        opacity: 0.8;\n        z-index: 999;\n      }\n\n      :host(.full) .ngx-backdrop {\n        position: fixed;\n      }\n\n      :host(.content) .ngx-backdrop {\n        position: absolute;\n      }\n    ",
                      ],
                  }]
          }], propDecorators: { styles: [{
                  type: i0.Input
              }], show: [{
                  type: i0.Input
              }], canBackDropDismiss: [{
                  type: i0.Input
              }], onBackDropDismiss: [{
                  type: i0.Output
              }] } });

  var NgxBackdropModule = /** @class */ (function () {
      function NgxBackdropModule() {
      }
      return NgxBackdropModule;
  }());
  NgxBackdropModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NgxBackdropModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  NgxBackdropModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NgxBackdropModule, declarations: [NgxBackdropComponent], imports: [i1.CommonModule], exports: [NgxBackdropComponent] });
  NgxBackdropModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NgxBackdropModule, imports: [[
              i1.CommonModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: NgxBackdropModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          NgxBackdropComponent
                      ],
                      imports: [
                          i1.CommonModule
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

  exports.NgxBackdropComponent = NgxBackdropComponent;
  exports.NgxBackdropModule = NgxBackdropModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=indraraj26-ngx-backdrop.umd.js.map
