import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app/app.component';
import { PromisesComponent } from './Hard-Topics/Rxjs/promises/promises.component';
import { AsyncAwaitComponent } from './Hard-Topics/Rxjs/async-await/async-await.component';
import { ListComponent } from './Hard-Topics/Rxjs/list/list.component';
import { FromEventComponent } from './Hard-Topics/Rxjs/from-event/from-event.component';
import { HomeComponent } from '../components/home/home.component'
const routes: Routes = [
  { path: 'promise', component: PromisesComponent },
  { path: 'async-await', component: AsyncAwaitComponent },
  { path: 'from-event', component: FromEventComponent },
  { path: 'list', component: ListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule { }
