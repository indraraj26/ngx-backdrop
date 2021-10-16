import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutosizeModule } from 'ngx-autosize';
import { FullOverlayComponent } from './full-overlay/full-overlay.component';
import { ContentOverlayComponent } from './content-overlay/content-overlay.component';
import { ElementContentOverlayComponent } from './element-content-overlay/element-content-overlay.component';
import { TabsComponent } from './tabs.component';
import { NgxBackdropModule } from '../../../projects/ngx-backdrop/src/lib/ngx-backdrop.module';

const tabRoutes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'content',
        component: ContentOverlayComponent,
      },
      {
        path: 'element',
        component: ElementContentOverlayComponent,
      },
      {
        path: 'full',
        component: FullOverlayComponent,
      },
      {
        path: '**',
        redirectTo: '/tabs/content',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/tabs/content',
  },
];

@NgModule({
  declarations: [
    ContentOverlayComponent,
    FullOverlayComponent,
    ElementContentOverlayComponent,
    TabsComponent
  ],
  imports: [CommonModule, NgxBackdropModule, RouterModule.forChild(tabRoutes), AutosizeModule],
})
export class TabsModule {}
