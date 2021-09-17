import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentRoutingModule } from './Components.routing.module'
// Components
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './Easy-Topics/Components-Interactions/parent/parent.component';
import { ChildComponent } from './Easy-Topics/Components-Interactions/parent/child/child.component';
import { DataBindingsComponent } from './Easy-Topics/data-bindings/data-bindings.component';
import { PropertyBindingsComponent } from './Easy-Topics/property-bindings/property-bindings.component';
import { AngularDirectivesComponent } from './Easy-Topics/angular-directives/angular-directives.component';
import { LifeCycleHooksComponent } from './Easy-Topics/life-cycle-hooks/life-cycle-hooks.component';
import { PromisesComponent } from './Hard-Topics/Rxjs/promises/promises.component';
import { AsyncAwaitComponent } from './Hard-Topics/Rxjs/async-await/async-await.component';
import { FromEventComponent } from './Hard-Topics/Rxjs/from-event/from-event.component';
import { ListComponent } from './Hard-Topics/Rxjs/list/list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ParentComponent,
    ChildComponent,
    DataBindingsComponent,
    PropertyBindingsComponent,
    AngularDirectivesComponent,
    LifeCycleHooksComponent,
    PromisesComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    ListComponent,
  ],
  imports: [
    ComponentRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    ParentComponent,
    ChildComponent,
    DataBindingsComponent,
    PromisesComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    ListComponent,
    ComponentRoutingModule
  ],
})
export class ComponentsModule { }
