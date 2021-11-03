# ngx-backdrop @Indraraj26
# [Demo](https://indraraj26.github.io/ngx-backdrop)

# Installation

```
npm install @indraraj26/ngx-backdrop
```

And then include it in your module.

```
import { NgxBackdropModule } from '@indraraj26/ngx-backdrop';
// ...

@NgModule({
imports: [
 NgxBackdropModule
// ...
]
// ...
})
export class AppModule {}
```
## @Props
- show - {boolean} - default: true - toggle backdrop
- canBackDropDismiss - {boolean} - default : false
- styles - { {[key: string]: any} } 
    
## @Event
- onBackDropDismiss - {listener} - When user will click on backdrop this event will fire for that you will have to set canBackDropDismiss true
      
## @Usage
html: 
```
 <div class="cards">
      <ngx-backdrop class="full" [styles]="styles" [canBackDropDismiss]="true"
             (onBackDropDismiss)="onBackDropDismiss($event)">
      </ngx-backdrop>
      <div>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga fugit minima illo recusandae? Cupiditate provident dolorum susci
     <div class="btn-container">
         <button class="btn-more" (click)="onViewMore()">View More</button>
     </div>
   </div>
</div>
```

ts:
```
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
```