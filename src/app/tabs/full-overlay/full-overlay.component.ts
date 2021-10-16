import { Component } from '@angular/core';

@Component({
  selector: 'app-full-overlay',
  templateUrl: './full-overlay.component.html',
  styleUrls: ['./full-overlay.component.scss']
})
export class FullOverlayComponent {
  styles=  {
    background: 'rgba(0,0,0,0.8)',
  }

  onViewMore() {
    alert('view more rocks')
  }

  onBackDropDismiss(event: any) {
    console.log(event, 'backdrop dismiss')
  }
}
