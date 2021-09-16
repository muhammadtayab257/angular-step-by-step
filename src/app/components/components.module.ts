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
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';



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
    DataBindingsComponent
  ],
})
export class ComponentsModule { }
