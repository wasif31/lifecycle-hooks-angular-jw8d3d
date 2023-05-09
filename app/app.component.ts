import { Component, ViewChild } from "@angular/core";
import { ChildComponent } from "./child.component";
 
@Component({
  selector: "my-app",
  template: `
  
  AfterConentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
 
  <app-child>
    <b>Injected</b> content from the <i>Parent</i>
  </app-child>
 
 
 
  `,
})
export class AppComponent {
 
  message="";
 
  @ViewChild(ChildComponent) viewChild: ChildComponent;
 
  ngOnChanges() {
    console.log('AppComponent==>ngOnChanges');
  }
 
  ngOnInit() {
    console.log('AppComponent==>ngOnInit');
  }
 
  ngDoCheck() {
    console.log('AppComponent==>ngDoCheck');
  }
 
  ngAfterContentInit() {
    console.log('AppComponent==>ngAfterContentInit');
  }
 
  ngAfterContentChecked() {
    console.log('AppComponent==>ngAfterContentChecked');
  }
 
  ngAfterViewInit() {
    console.log('AppComponent==>AfterViewInit');
  }
 
  ngAfterViewChecked() {
    console.log('AppComponent==>AfterViewChecked');
    this.message=this.viewChild.message;
  }
 
}