import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentRoutingModule } from './Components.routing.module'
// Components
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './Easy-Topics/Components-Interactions/parent/parent.component';
import { ChildComponent } from './Easy-Topics/Components-Interactions/parent/child/child.component';
import { PromisesComponent } from './Hard-Topics/Rxjs/promises/promises.component';
import { AsyncAwaitComponent } from './Hard-Topics/Rxjs/async-await/async-await.component';
import { FromEventComponent } from './Hard-Topics/Rxjs/from-event/from-event.component';
import { ListComponent } from './Hard-Topics/Rxjs/list/list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ParentComponent,
    ChildComponent,
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
    PromisesComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    ListComponent,
    ComponentRoutingModule
  ],
})
export class ComponentsModule { }
