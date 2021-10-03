import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-overlay',
  templateUrl: './content-overlay.component.html',
  styleUrls: ['./content-overlay.component.scss']
})
export class ContentOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  styles=  {
    background: 'rgba(0,0,0,0.6)'
  }

  onViewMore() {
    alert('view more rocks')
  }

}
