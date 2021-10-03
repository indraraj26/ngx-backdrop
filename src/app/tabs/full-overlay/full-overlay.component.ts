import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-overlay',
  templateUrl: './full-overlay.component.html',
  styleUrls: ['./full-overlay.component.scss']
})
export class FullOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  styles=  {
    background: 'rgba(0,0,0,0.8)'
  }

  onViewMore() {
    alert('view more rocks')
  }
  
}
