import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OperatorsExampleComponent } from './operators-example/operators-example.component';
import { OperatorConcatComponent } from './operator-concat/operator-concat.component';
import { StepOneComponent } from './dynamicComponent/step-one/step-one.component';
import { StepTwoComponent } from './dynamicComponent/step-two/step-two.component';
import { StepThreeComponent } from './dynamicComponent/step-three/step-three.component';
import { ChildRecursiveComponent } from './child-recursive/child-recursive.component';
import { StylingDivComponent } from './styling-div/styling-div.component';
import { PermissionControlComponent } from './permission-control/permission-control.component';
import { HasRoleDirective } from './permission-control/has-role.directive';
import { ShellComponent } from './shell/shell.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'learning-azure',
    component: ShellComponent
  },
  {
    path:'swtichmap',
    component:OperatorsExampleComponent
  },
  {
    path:'learning-azure',
    loadChildren: ()=>import('src/app/learing/learning-azure/learning-azure.module').then(m=>m.LearningAzureModule) 
  },
  {
    path:'concatMap',
    component: OperatorConcatComponent
  },
  // {
    // path:'**',
    // redirectTo:'shell',
    // pathMatch:'full'
  // }

];

@NgModule({
  declarations: [
    AppComponent,
    OperatorsExampleComponent,
    OperatorConcatComponent,
    ChildRecursiveComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StylingDivComponent,
    PermissionControlComponent,
    HasRoleDirective,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useValue: checkISO,
    //   multi: true,
    //   deps: [Router]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkISO() {

  if(typeof window==='string'){
    return false;
  }

  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('good work')
    }, 3000);
  });

}