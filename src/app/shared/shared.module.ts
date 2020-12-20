import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedCComponent} from "./shared-c/shared-c.component";



@NgModule({
  declarations: [SharedCComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'shared', component: SharedCComponent}])
  ]
})
export class SharedModule { }
