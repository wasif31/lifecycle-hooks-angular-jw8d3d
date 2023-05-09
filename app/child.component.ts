import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div style="border:solid; border-width:1px;">
 
      <h2>Child Component</h2>
    
      message : <input [(ngModel)]="message">
 
      <p> Injected Content Below</p>
      <ng-content></ng-content>
 
    </div>
  `,
})
export class ChildComponent {
  message = '';

  ngOnChanges() {
    console.log('  ChildComponent==>ngOnChanges');
  }

  ngOnInit() {
    console.log('  ChildComponent==>ngOnInit');
  }

  ngDoCheck() {
    console.log('  ChildComponent==>ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('  ChildComponent==>ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('  ChildComponent==>ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('  ChildComponent==>AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('  ChildComponent==>AfterViewChecked');
  }
}
