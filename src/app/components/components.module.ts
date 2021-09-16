import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
// Components
import { HeaderComponent } from './Shared-Ui/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './Shared-Ui/footer/footer.component';
import { ParentComponent } from './Easy-Topics/Components-Interactions/parent/parent.component';
import { ChildComponent } from './Easy-Topics/Components-Interactions/parent/child/child.component';
import { DataBindingsComponent } from './Easy-Topics/data-bindings/data-bindings.component';
import { PropertyBindingsComponent } from './Easy-Topics/property-bindings/property-bindings.component';
import { AngularDirectivesComponent } from './Easy-Topics/angular-directives/angular-directives.component';
import { LifeCycleHooksComponent } from './Easy-Topics/life-cycle-hooks/life-cycle-hooks.component';
import { PromisesComponent } from './Hard-Topics/Rxjs/promises/promises.component';
import { AsyncAwaitComponent } from './Hard-Topics/Rxjs/async-await/async-await.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    DataBindingsComponent,
    PropertyBindingsComponent,
    AngularDirectivesComponent,
    LifeCycleHooksComponent,
    PromisesComponent,
    AsyncAwaitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    DataBindingsComponent,
    PromisesComponent,
    AsyncAwaitComponent
  ],
})
export class ComponentsModule { }
