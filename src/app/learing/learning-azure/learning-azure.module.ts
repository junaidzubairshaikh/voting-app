import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningAzureRoutingModule } from './learning-azure-routing.module';
import { LearningAzureComponent } from './learning-azure.component';


@NgModule({
  declarations: [
    LearningAzureComponent
  ],
  imports: [
    CommonModule,
    LearningAzureRoutingModule
  ]
})
export class LearningAzureModule { }
