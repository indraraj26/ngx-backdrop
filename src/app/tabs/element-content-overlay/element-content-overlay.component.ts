import { Component } from '@angular/core';

@Component({
  selector: 'app-element-content-overlay',
  templateUrl: './element-content-overlay.component.html',
  styleUrls: ['./element-content-overlay.component.scss'],
})
export class ElementContentOverlayComponent {
  styles = {
    background: 'rgba(0,0,0,0.6)',
  };

  onViewMore() {
    alert('view more rocks');
  }
}
