import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings/settings.component';
import {ChangePasswordFormComponent} from './change-password-form/change-password-form.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [SettingsComponent, ChangePasswordFormComponent],
  imports: [CommonModule, SettingsRoutingModule, CardModule, InputTextModule, ReactiveFormsModule, ToastModule, CheckboxModule, FormsModule],
})
export class SettingsModule {


}
