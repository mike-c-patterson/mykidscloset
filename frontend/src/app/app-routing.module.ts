import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KidsComponent } from './kids/kids.component';

const routes: Routes = [
  {path: 'kids/:id', component: KidsComponent},
  {path: 'kids/new', component: KidsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
