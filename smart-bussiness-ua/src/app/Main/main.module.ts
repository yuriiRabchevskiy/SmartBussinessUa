import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Shared/services/auth-guard';
import { MasterPageComponent } from './masterpage/masterpage.component';

const routes: Routes = [
  { path: '', component: MasterPageComponent, pathMatch: 'full', canActivate: [AuthGuard] }];

@NgModule({
  declarations: [MasterPageComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: []
})

export class MainModule {
  constructor() {}
}
