import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Basic/Components/interpolation/interpolation.component';
import { BindingsComponent } from './Basic/Components/bindings/bindings.component';
import { DirectivesComponent } from './Basic/Components/directives/directives.component';
import { PipesComponent } from './Basic/Components/pipes/pipes.component';
import { ComponentCommunicationComponent } from './Intermediate/Components/component-communication/component-communication.component';
import { ChildComponent } from './Intermediate/Components/component-communication/child/child.component';
import { TemplateReferenceComponent } from './Intermediate/Components/template-reference/template-reference.component';
import { ComponentLifeCycleHookComponent } from './Intermediate/Components/component-life-cycle-hook/component-life-cycle-hook.component';
import { AngularFormsComponent } from './Intermediate/Components/angular-forms/angular-forms.component';
import { TemplateDrivenFormsComponent } from './Intermediate/Components/angular-forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './Intermediate/Components/angular-forms/reactive-forms/reactive-forms.component';
import { NestedFormsComponent } from './Intermediate/Components/angular-forms/nested-forms/nested-forms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsValidationsComponent } from './Intermediate/Components/angular-forms/forms-validations/forms-validations.component';
import { ServicesDependencyInjectionComponent } from './Advance/services-dependency-injection/services-dependency-injection.component';
import { ServicesPushApproachComponent } from './Advance/services-push-approach/services-push-approach.component';
import { HttpComponent } from './Advance/http/http.component';
import { RoutingRelatedModule } from './Advance/routing-related-module/routing-related-module.module'
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingsComponent,
    DirectivesComponent,
    PipesComponent,
    ComponentCommunicationComponent,
    ChildComponent,
    TemplateReferenceComponent,
    ComponentLifeCycleHookComponent,
    AngularFormsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    NestedFormsComponent,
    FormsValidationsComponent,
    ServicesDependencyInjectionComponent,
    ServicesPushApproachComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RoutingRelatedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
