import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CallComponent } from './call/call.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'call', component: CallComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  // 初始化路由器
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
